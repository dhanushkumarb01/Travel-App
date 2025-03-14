"use client";

const blogPosts = [
  {
    id: 1,
    date: "21 June 2021",
    title: "The Amazing Difference a Year of Travelling.",
    description:
      "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
    image:
      "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bgColor: "bg-[#71C3FD]",
  },
  {
    id: 2,
    date: "28 June 2021",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    description:
      "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    image:
      "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bgColor: "bg-[#FA7436]",
  },
  {
    id: 3,
    date: "10 July 2021",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    description:
      "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
    image:
      "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bgColor: "bg-[#FC747B]",
  },
];

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto sm:py-16 py-12 sm:px-0 px-4">
      <div className="text-start space-y-4">
        <h2 className="text-[36px] font-bold text-[#0A0A0A]">Our Blog</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="">
            <div
              className={`rounded-xl overflow-hidden shadow-lg pl-8 pt-4 ${post.bgColor}`}
            >
              <span className="text-white text-sm pl-4">{post.date}</span>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[296px] object-cover pl-4 pt-4"
              />
            </div>
            <div className="max-w-sm">
            <h3 className="mt-4 text-[20px] font-semibold text-[#000929]">
              {post.title}
            </h3>

            <p className="mt-2 text-sm text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
