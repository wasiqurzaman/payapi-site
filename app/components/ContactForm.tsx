export default function ContactForm() {
  return (
    <form action="" className="flex-1 flex flex-col gap-[24px]">
      <input
        type="text"
        placeholder="Name"
        className="pb-[17px] px-[20px] bg-inherit border-b border-gray-400 outline-none"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="pb-[17px] px-[20px] bg-inherit border-b border-gray-400 outline-none"
      />
      <input
        type="text"
        placeholder="Title"
        className="pb-[17px] px-[20px] bg-inherit border-b border-gray-400 outline-none"
      />
      <textarea
        placeholder="Message"
        className="pb-[17px] px-[20px] bg-inherit border-b border-gray-400 outline-none"
      ></textarea>
      <div className="flex gap-[26px] items-center">
        <input type="checkbox" name="" id="" className="bg-[#979797] w-6 h-6" />
        <label htmlFor="" className="text-sanJuanBlue">
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <button className="text-sanJuanBlue border-2 border-sanJuanBlue px-[32px] py-[14px] rounded-full font-bold text-nowrap">
        Submit
      </button>
    </form>
  );
}
