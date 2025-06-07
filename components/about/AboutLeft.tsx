import Image from "next/image"

function AboutLeft() {
  return (
     <div className="lg:w-1/2">
            <Image
              src="https://glorebd.com/assets/about_img-4BbpaMTv.webp" 
              alt="About GloreBD"
              width={600}
              height={800}
              className="rounded-md object-cover"
            />
          </div>
  )
}

export default AboutLeft