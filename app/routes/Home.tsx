import { CardContainer, CardBody, CardItem } from "components/ui/3d-card";
import type { Route } from "./+types/Home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "A list of great restaurants!" },
  ];
}

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center pt-16 p-4 mx-auto dark:text-white dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContainer>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/5 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Bar & Cafeteria
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Signature cocktails and drinks.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.stockcake.com/public/a/5/b/a5b42388-78ff-405a-b246-acc81409123a_large/neon-lit-nightclub-interior-stockcake.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center mt-20">
              <CardItem
                translateZ="60"
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => {
                  navigate("/bar");
                }}
              >
                View Bar
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/5 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Restaurant
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Seasonal Italian dishes.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://www.top25restaurants.com/media/img/2024/11/dubai-best-restaurants-la-dame-de-pic-dubai-french-at-top-25-restaurants.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center mt-20">
              <CardItem
                translateZ="60"
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => {
                  navigate("/restaurant");
                }}
              >
                View Restaurant
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl ddark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/5 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Buffet
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A wide selection of freshly prepared dishes.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1662982696492-057328dce48b?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center mt-20">
              <CardItem
                translateZ="60"
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => {
                  navigate("/buffet");
                }}
              >
                View Buffet
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
