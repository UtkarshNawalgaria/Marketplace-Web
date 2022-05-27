import styled from 'styled-components'
import { IProductMedia } from '../../types/product'

interface Props {
  media: IProductMedia[]
}

const ProductImage = styled.img`
  width: 100%;
`

const ImageGallery = ({ media }: Props) => {

  return (
    <div>
      <ProductImage src={media[0].image.full} alt={media[0].image_alt_text} />
    </div>
  )
}

export default ImageGallery