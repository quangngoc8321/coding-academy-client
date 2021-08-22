import { Box, Button, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const PaymentMethod = ({ courseId, firstLesson, createCheckOutSession }) => {
  const { slug: lessonSlug } = firstLesson;
  const router = useRouter();
  const { courseSlug } = router.query;
  const [isPaid, setIsPaid] = useState(false);
  const { isAuthStateReady, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkIsPaid = async () => {
      try {
        setLoading(true);
        const url =
          process.env.NEXT_PUBLIC_STRAPI_REST_API + "/orders/isPurchase";

        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ courseId }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await res.json();

        setIsPaid(true);
        setLoading(false);
      } catch (error) {
        setIsPaid(false);
        setLoading(false);
      }
    };
    return checkIsPaid();
  }, []);

  return (
    <Box>
      {isAuthStateReady ? (
        <>
          {user ? (
            <>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {isPaid ? (
                    <Link href={`${courseSlug}/${lessonSlug}`}>
                      <a>
                        <Button colorScheme="teal" size="md">
                          👉 Watch now!
                        </Button>
                      </a>
                    </Link>
                  ) : (
                    <Button
                      colorScheme="teal"
                      onClick={() => createCheckOutSession()}
                      size="md"
                    >
                      👉 Buy Now
                    </Button>
                  )}
                </>
              )}
            </>
          ) : (
            <Link href="/auth/login">
              <a>
                <Button colorScheme="teal" size="md">
                  👉 You need to login to pay this course
                </Button>
              </a>
            </Link>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export default PaymentMethod;
