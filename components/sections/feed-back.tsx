import FeedBackItem, { FeedBackItemProps } from "../feed-back-item";
import SectionContentContainer from "../section-content-container";

interface FeedBackProp {
  title: string;
  paragraph: string;
  feedbacks: FeedBackItemProps[];
}

const FeedBack = ({
  title = "What Clients Say",
  paragraph = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
  feedbacks = [
    {
      fullname: "Regina Miles",
      profession: "Student",
      comment:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      imageUrl: "/images/Omar_Epps.png",
      rating: 3,
    },
    {
      fullname: "Omar Epps",
      profession: "Footballer",
      comment:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      imageUrl: "/images/Regina_Miles.png",
      rating: 4,
    },
    {
      fullname: "Vivica Fox",
      profession: "Doctor",
      comment:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
      imageUrl: "/images/vivica_fox.png",
      rating: 4,
    },
  ],
}: FeedBackProp) => {
  return (
    <SectionContentContainer header={title} paragraph={paragraph}>
      {feedbacks &&
        feedbacks.map(({ fullname, profession, comment, imageUrl, rating }, index) => (
          <FeedBackItem
            fullname={fullname}
            profession={profession}
            comment={comment}
            imageUrl={imageUrl}
            rating={rating}
            key={index}
          />
        ))}
    </SectionContentContainer>
  );
};

export default FeedBack;
