import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spinner,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CourseItem from "../../components/CourseItem";
const MyCoursesPage = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_STRAPI_REST_API + "/orders/mine";
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        const courses = data.map((item) => item.course);
        setCourses(courses);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchMyCourses();
  }, []);

  const { colorMode } = useColorMode();
  const breadcrumbColor = colorMode === "light" ? "orange.500" : "orange.400";
  return (
    <Stack minH="82vh">
      <Breadcrumb
        spacing="0.5"
        separator={<ChevronRightIcon color="gray.500" />}
        fontSize={{ base: "12px", md: "14px", lg: "16px" }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={Link}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage textTransform="capitalize">
          <BreadcrumbLink href="#" color={breadcrumbColor}>
            My-Courses
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex
        justify={["center", "space-evenly", "space-evenly", "center"]}
        wrap="wrap"
      >
        {courses && courses.length === 0 && (
          <span>You dont have any courses.</span>
        )}
        {courses &&
          courses.map((course) => (
            <CourseItem course={course} key={course.id} isPaid={true} />
          ))}
        {!courses && <Spinner />}
      </Flex>
    </Stack>
  );
};

export default MyCoursesPage;
