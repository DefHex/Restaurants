import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "components/animate-ui/components/radix/dialog";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Apperol Spritz",
    path: "./apperol.png",
    selected: false,
    description: "A refreshing cocktail with Aperol, prosecco, and soda water.",
    price: "€12.99",
  },
  {
    id: 2,
    name: "Blueberry Spritz",
    path: "./blueberry.png",
    selected: false,
    description: "A fruity and refreshing blueberry spritz cocktail.",
    price: "€10.99",
  },
  {
    id: 3,
    name: "Espresso Martini",
    path: "./espresso-martini.png",
    selected: false,
    description:
      "A classic cocktail made with espresso, vodka, and coffee liqueur.",
    price: "€10.99",
  },
  {
    id: 4,
    name: "Lemonchello Spritz",
    path: "./lemonchello.png",
    selected: false,
    description: "A zesty and refreshing lemonchello spritz cocktail.",
    price: "€10.99",
  },
  {
    id: 5,
    name: "Mojito",
    path: "./mojito.png",
    selected: false,
    description:
      "A classic cocktail made with rum, lime, mint, sugar, and soda water.",
    price: "€10.99",
  },
];

export default function BarScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedDrink, setSelectedDrink] = useState<
    (typeof menuItems)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const extendedMenuItems = [
    ...menuItems,
    ...menuItems.map((item) => ({ ...item, id: item.id + 100 })),
  ]; // Duplicate items for seamless loop

  useEffect(() => {
    let scrollInterval: number;

    if (!isHovering) {
      scrollInterval = window.setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          // When the scroll position exceeds the width of the original list,
          // silently jump back to the beginning.
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          } else {
            // Otherwise, continue scrolling smoothly.
            container.scrollBy({
              left: 1,
              behavior: "smooth",
            });
          }
        }
      }, 25); // Adjust the interval to change scroll speed
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovering]);
  function showDetails(item: (typeof menuItems)[0]) {
    setSelectedDrink(item);
    setIsDialogOpen(true);
  }
  return (
    <div className="min-h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/barBG.png')] ">
      <div className=" mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2 text-white font-serif shadow-lg p-8">
          Welcome to the Bar
        </h1>
        <h3 className="text-lg mb-8 text-white shadow-lg py-8">
          Choose your drink:
        </h3>
        {selectedDrink && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedDrink.name}</DialogTitle>
                <DialogDescription>
                  {selectedDrink.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center">
                <img
                  src={selectedDrink.path}
                  alt={selectedDrink.name}
                  className="h-64 w-auto object-cover rounded-lg"
                />
              </div>
              <p className="text-center text-lg font-semibold">
                {selectedDrink.price}
              </p>
              <DialogFooter>
                <button onClick={() => setIsDialogOpen(false)}>Close</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="grid grid-flow-col auto-cols-[100%] overflow-x-auto no-scrollbar md:auto-cols-[50%]  xl:auto-cols-[30%] 2xl:auto-cols-[20%] "
        >
          {extendedMenuItems.map((item, index) => (
            <div key={item.id + index} className="group">
              <img
                className="h-[70vh] w-auto object-cover transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                src={item.path}
                alt={item.name}
                onClick={() => showDetails(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
