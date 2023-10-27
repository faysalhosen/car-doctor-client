import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types"
const ServiceCard = ({service}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">{service.title}</h2>

    <div className="flex w-full items-center">
      <p className='font-medium text-start text-[#FF3811]'>Price: ${service.price}</p>
      <button className="btn bg-white text-[#FF3811]"><AiOutlineArrowRight/></button>
    </div>
  </div>
</div>
  )
}

ServiceCard.propTypes={
  service:PropTypes.object
}
export default ServiceCard