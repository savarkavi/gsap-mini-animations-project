"use client";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Info",
    },
    {
      id: 3,
      label: "Products",
    },
    {
      id: 4,
      label: "Shop",
    },
  ];

  return (
    <div className="flex w-full items-center justify-between p-4 text-xl text-black">
      <p className="font-bold uppercase">NorkWood</p>
      <div className="flex items-center gap-6">
        {menuItems.map((item) => (
          <p key={item.id} className="cursor-pointer">
            {item.label}
          </p>
        ))}
      </div>
      <p className="cursor-pointer">Contact</p>
    </div>
  );
};

export default Header;
