import { CardContainer, CardItem } from "components/ui/3d-card";
import type { Route } from "./+types/Home";
import { Link ,useNavigate} from "react-router";
 
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "A list of great restaurants!" },
  ];
}

export default function Home() {
  let navigate = useNavigate();
  return<>
    <div className="pt-16 p-4 container mx-auto dark:text-white dark:bg-black">
      <h1 className="text-3xl font-bold mb-4  ">Welcome to the Restaurant App!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardContainer>
          <CardItem translateZ="150" className="w-full mt-4">
            <img
              src="https://images.stockcake.com/public/a/5/b/a5b42388-78ff-405a-b246-acc81409123a_large/neon-lit-nightclub-interior-stockcake.jpg"
              className="max-h-100 max-w-max w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Cafe / Bar and seating area of a nightclub with neon lights"
              onClick={() => {navigate("/cafe")}}
            />
          </CardItem>
        </CardContainer>
        <CardContainer>
          <CardItem translateZ="150" className="w-full mt-4">
            <img
              src="https://www.top25restaurants.com/media/img/2024/11/dubai-best-restaurants-la-dame-de-pic-dubai-french-at-top-25-restaurants.png"
              height="1000"
              width="1000"
              className="max-h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Cafe / Bar and seating area of a nightclub with neon lights"
              onClick={() => {navigate("/restaurant")}}
            />
          </CardItem>
          </CardContainer>
        </div>
    </div>
    </>
}
