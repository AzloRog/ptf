interface Props {
  title: string;
  data: { id: number; name: string }[];
}
const Card = ({ title, data }: Props) => {
  return (
    <div className="card-bg-gradient rounded-2xl p-6 shadow-2xl shadow-black">
      <h3 className="text-4xl ">{title}</h3>
      <ul className="mt-8 ml-4 flex gap-3 gap-y-5 flex-wrap ">
        {data.map((item) => (
          <li
            className="card-item-bg py-1 px-6 rounded-full cursor-pointer shadow-lg shadow-gray-800"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
