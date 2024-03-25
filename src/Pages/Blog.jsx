import logo from "../Assets/2815428.png";

const blogData = [
  {
    id: 1,

    title: "Lorem Ipsum Dolor Sit Amet",

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    date: "February 10, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 2,

    title: "Consectetur Adipiscing Elit",

    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "February 12, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  // Add more blog posts here

  {
    id: 3,

    title: "Sed Do Eiusmod Tempor",

    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    date: "February 15, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 4,

    title: "Sed Do Eiusmod Tempor",

    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    date: "February 18, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 5,

    title: "Excepteur Sint Occaecat",

    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    date: "February 20, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 6,

    title: "Lorem Ipsum Dolor Sit Amet",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "February 22, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 7,

    title: "Consectetur Adipiscing Elit",

    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "February 24, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 8,

    title: "Sed Do Eiusmod Tempor",

    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "February 26, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 9,

    title: "Duis Aute Irure Dolor",

    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    date: "February 28, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 10,

    title: "Excepteur Sint Occaecat",

    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    date: "March 1, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 11,

    title: "Lorem Ipsum Dolor Sit Amet",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "March 3, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 12,

    title: "Consectetur Adipiscing Elit",

    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "March 5, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 13,

    title: "Sed Do Eiusmod Tempor",

    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "March 7, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 14,

    title: "Duis Aute Irure Dolor",

    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    date: "March 9, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 15,

    title: "Excepteur Sint Occaecat",

    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    date: "March 11, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 16,

    title: "Lorem Ipsum Dolor Sit Amet",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    date: "March 13, 2024",

    imageUrl: logo,

    buttonText: "Read More",
  },

  {
    id: 17,

    title: "Consectetur Adipiscing Elit",

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "February 10, 2024",
    imageUrl: logo,
    buttonText: "Read More",
  },

  {
    id: 18,
    title: "Lorem Ipsum Dolor Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "February 10, 2024",
    imageUrl: logo,
    buttonText: "Read More",
  },
  {
    id: 19,
    title: "Consectetur Adipiscing Elit",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "February 12, 2024",
    imageUrl: logo,
    buttonText: "Read More",
  },

  {
    id: 20,
    title: "Duis Aute Irure Dolor",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "February 28, 2024",
    imageUrl: logo,
    buttonText: "Read More",
  },
];

export default function Blog() {
  return (
    <div className="blog-container">
      {blogData.map((data) => {
        return (
          <div key={data.id} className="blog">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <img src={data.imageUrl} alt="Person-logo" />
            <p>{data.date}</p>
            <button>{data.buttonText}</button>
          </div>
        );
      })}
    </div>
  );
}
