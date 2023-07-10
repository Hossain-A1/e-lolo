
const SectionTitle = ({title,desc}) => {
  return (
    <div className="section-title flex flex-col items-center text-center gap-2">
        <h1 className="capitalize text-3xl font-semibold">
          {title}
        </h1>
        <p className="text-gray-400 w-1/2">
       {desc}
        </p>
      </div>
  )
}

export default SectionTitle