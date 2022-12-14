import "./Product.css"

export default function Product({link,img}) {
  return (
    <div className="p">
         <div className="p-browser">
             <div className="p-circle"></div>
             <div className="p-circle"></div>
             <div className="p-circle"></div>
         </div>
         <a href={link} target="_blank" rel="noreferrer" >
           <img src={img} alt="" className="p-img" />
         </a>
    </div>
  )
}
