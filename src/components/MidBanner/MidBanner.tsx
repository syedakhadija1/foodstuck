import Image from "next/image";


export const MidBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center py-7 bg-[url('/assets/Midbanner.png')]"
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-gray-100">
          {/* Card 1 */}
          <li className="flex flex-col items-center">
            <Image
              src='/assets/Chef.png'
              alt="chef's icon"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="mb-2 text-lg font-semibold">Professional Chefs</p>
            <span className="text-3xl font-bold">30</span>
          </li>

          {/* Card 2 */}
          <li className="flex flex-col items-center">
            <Image
              src='/assets/Chef.png'
              alt="fast food"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="mb-2 text-lg font-semibold">Items Of Food</p>
            <span className="text-3xl font-bold">320</span>
          </li>

          {/* Card 3 */}
          <li className="flex flex-col items-center">
            <Image
              src='/assets/Chef.png'
              alt="dishes"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="mb-2 text-lg font-semibold">Years Of Experienced</p>
            <span className="text-3xl font-bold">30+</span>
          </li>

          {/* Card 4 */}
          <li className="flex flex-col items-center">
            <Image
              src='/assets/Chef.png'
              alt="pizza"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="mb-2 text-lg font-semibold">Happy Customers</p>
            <span className="text-3xl font-bold">220</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
