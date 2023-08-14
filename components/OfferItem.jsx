import Image from "next/image";

const OfferItem = ({photo,alt}) => {
  return (
    <div className="h-full w-full section-p">
      
      <Image height={500} width={500} src={photo} alt={alt} priority   className="w-full h-[70vh] object-cover"/>
    </div>
  )
}

export default OfferItem