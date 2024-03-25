import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { LearnHeader } from "@/components/layouts/LearnHeader";
import { redirect } from "next/navigation";

import { getUserProgress } from "@/db/queries";

export default async function LearnPage() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <LearnHeader title="Learn Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress points={100} hearts={5} />
      </StickyWrapper>
    </div>
  );
}
