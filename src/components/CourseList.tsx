"use client";

import { CourseCard } from "./CourseCard";

import { courses } from "@/db/schema";

interface ListProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: number;
}

export const CoursesList = ({ courses, activeCourseId }: ListProps) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
