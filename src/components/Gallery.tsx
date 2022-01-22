import React from "react"
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  IGatsbyImageData,
} from "gatsby-plugin-image"
import { chunk, sum } from "lodash"
import styled from "@emotion/styled"

interface GalleryImage {
  id: string
  aspectRatio: number
  imageData: IGatsbyImageData | undefined
  title?: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
  itemsPerRow?: number
}

const Gallery: React.FC<GalleryProps> = ({ images, itemsPerRow = 3 }) => {
  const filteredImages = images.filter(i => i.imageData)
  // Split images into groups of the given size
  const rows = chunk(filteredImages, itemsPerRow)
  const rowGapPercentage = 2

  return (
    <GalleryContainer>
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return (
          <GalleryRow>
            {row.map(image => (
              <PhotoWrapper
                key={image.id}
                title={image.title}
                aR={image.aspectRatio}
                totalAR={rowAspectRatioSum}
                gapAmount={row.length - 1}
              >
                {image.imageData && (
                  <PhotoInGrid
                    image={image.imageData}
                    alt={image.title || "No alternative text defined."}
                  />
                )}
              </PhotoWrapper>
            ))}
          </GalleryRow>
        )
      })}
    </GalleryContainer>
  )
}

const PhotoInGrid = styled(GatsbyImage)`
  border-radius: ${props => props.theme.spacing.small};
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`
const GalleryRow = styled.div`
  display: flex;
  justify-content: space-between;
`

type ImageWrapperProps = {
  aR: number
  totalAR: number
  gapAmount: number
}

const PhotoWrapper = styled.div<ImageWrapperProps>`
  width: calc(
    100% * ${props => props.aR / props.totalAR} -
      ${props => props.gapAmount * (props.aR / props.totalAR)} *
      ${props => props.theme.spacing.small}
  );
`

export default Gallery
