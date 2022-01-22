declare module "*.svg" {
  const content: any
  export default content
}
declare module "*.png"
declare module "*.jpg"

declare module "*.inline.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

