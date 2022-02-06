export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type StrapiPhotography = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  headerPicture?: Maybe<StrapiPhotographyHeaderPicture>;
  seo?: Maybe<StrapiPhotographySeo>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  headerText?: Maybe<Scalars['String']>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPhotographyPublished_AtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographyCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographyUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPicture = {
  photoCredit?: Maybe<Scalars['String']>;
  headerPhoto?: Maybe<StrapiPhotographyHeaderPictureHeaderPhoto>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhoto = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoProvider_Metadata>;
  formats?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormats>;
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};


export type StrapiPhotographyHeaderPictureHeaderPhotoCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographyHeaderPictureHeaderPhotoUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormats = {
  thumbnail?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnail>;
  large?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsLarge>;
  medium?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsMedium>;
  small?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmall>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnail = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailProvider_Metadata>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsLarge = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeProvider_Metadata>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsMedium = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumProvider_Metadata>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmall = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallProvider_Metadata>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographySeo = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiPhotograph = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  photoTaken?: Maybe<Scalars['Date']>;
  seo?: Maybe<StrapiPhotographSeo>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  image?: Maybe<StrapiPhotographImage>;
  slug?: Maybe<Scalars['String']>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPhotographPhotoTakenArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiPhotographSeo = {
  title?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiPhotographImage = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographImageProvider_Metadata>;
  formats?: Maybe<StrapiPhotographImageFormats>;
  provider?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};


export type StrapiPhotographImageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiPhotographImageUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiPhotographImageProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographImageFormats = {
  thumbnail?: Maybe<StrapiPhotographImageFormatsThumbnail>;
  large?: Maybe<StrapiPhotographImageFormatsLarge>;
  medium?: Maybe<StrapiPhotographImageFormatsMedium>;
  small?: Maybe<StrapiPhotographImageFormatsSmall>;
};

export type StrapiPhotographImageFormatsThumbnail = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographImageFormatsThumbnailProvider_Metadata>;
};

export type StrapiPhotographImageFormatsThumbnailProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographImageFormatsLarge = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographImageFormatsLargeProvider_Metadata>;
};

export type StrapiPhotographImageFormatsLargeProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographImageFormatsMedium = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographImageFormatsMediumProvider_Metadata>;
};

export type StrapiPhotographImageFormatsMediumProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiPhotographImageFormatsSmall = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiPhotographImageFormatsSmallProvider_Metadata>;
};

export type StrapiPhotographImageFormatsSmallProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHome = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  bio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  seo?: Maybe<StrapiHomeSeo>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  profilePicture?: Maybe<StrapiHomeProfilePicture>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiHomeCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiHomeUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiHomeSeo = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shareImage?: Maybe<StrapiHomeSeoShareImage>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImage = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeSeoShareImageProvider_Metadata>;
  formats?: Maybe<StrapiHomeSeoShareImageFormats>;
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};


export type StrapiHomeSeoShareImageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiHomeSeoShareImageUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImageProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImageFormats = {
  thumbnail?: Maybe<StrapiHomeSeoShareImageFormatsThumbnail>;
  large?: Maybe<StrapiHomeSeoShareImageFormatsLarge>;
  medium?: Maybe<StrapiHomeSeoShareImageFormatsMedium>;
  small?: Maybe<StrapiHomeSeoShareImageFormatsSmall>;
};

export type StrapiHomeSeoShareImageFormatsThumbnail = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeSeoShareImageFormatsThumbnailProvider_Metadata>;
};

export type StrapiHomeSeoShareImageFormatsThumbnailProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImageFormatsLarge = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeSeoShareImageFormatsLargeProvider_Metadata>;
};

export type StrapiHomeSeoShareImageFormatsLargeProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImageFormatsMedium = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeSeoShareImageFormatsMediumProvider_Metadata>;
};

export type StrapiHomeSeoShareImageFormatsMediumProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeSeoShareImageFormatsSmall = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeSeoShareImageFormatsSmallProvider_Metadata>;
};

export type StrapiHomeSeoShareImageFormatsSmallProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeProfilePicture = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeProfilePictureProvider_Metadata>;
  formats?: Maybe<StrapiHomeProfilePictureFormats>;
  provider?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};


export type StrapiHomeProfilePictureCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiHomeProfilePictureUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiHomeProfilePictureProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeProfilePictureFormats = {
  thumbnail?: Maybe<StrapiHomeProfilePictureFormatsThumbnail>;
  large?: Maybe<StrapiHomeProfilePictureFormatsLarge>;
  medium?: Maybe<StrapiHomeProfilePictureFormatsMedium>;
  small?: Maybe<StrapiHomeProfilePictureFormatsSmall>;
};

export type StrapiHomeProfilePictureFormatsThumbnail = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeProfilePictureFormatsThumbnailProvider_Metadata>;
};

export type StrapiHomeProfilePictureFormatsThumbnailProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeProfilePictureFormatsLarge = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeProfilePictureFormatsLargeProvider_Metadata>;
};

export type StrapiHomeProfilePictureFormatsLargeProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeProfilePictureFormatsMedium = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeProfilePictureFormatsMediumProvider_Metadata>;
};

export type StrapiHomeProfilePictureFormatsMediumProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiHomeProfilePictureFormatsSmall = {
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiHomeProfilePictureFormatsSmallProvider_Metadata>;
};

export type StrapiHomeProfilePictureFormatsSmallProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type StrapiGlobal = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteLanguage?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  socialNetworks?: Maybe<Array<Maybe<StrapiGlobalSocialNetworks>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiGlobalCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiGlobalUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiGlobalSocialNetworks = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<StrapiGlobalSocialNetworksIcon>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiGlobalSocialNetworksIcon = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<StrapiGlobalSocialNetworksIconProvider_Metadata>;
  provider?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};


export type StrapiGlobalSocialNetworksIconCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StrapiGlobalSocialNetworksIconUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type StrapiGlobalSocialNetworksIconProvider_Metadata = {
  public_id?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiURL?: Maybe<Scalars['String']>;
  collectionTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  singleTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryLimit?: Maybe<Scalars['Int']>;
  defaults?: Maybe<SitePluginPluginOptionsDefaults>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFonts = {
  google2?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle2>>>;
};

export type SitePluginPluginOptionsFontsGoogle2 = {
  family?: Maybe<Scalars['String']>;
  axes?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaults = {
  formats?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  strapiPhotography?: Maybe<StrapiPhotography>;
  allStrapiPhotography: StrapiPhotographyConnection;
  strapiPhotograph?: Maybe<StrapiPhotograph>;
  allStrapiPhotograph: StrapiPhotographConnection;
  strapiHome?: Maybe<StrapiHome>;
  allStrapiHome: StrapiHomeConnection;
  strapiGlobal?: Maybe<StrapiGlobal>;
  allStrapiGlobal: StrapiGlobalConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  context?: InputMaybe<SitePageContextFilterInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiPhotographyArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  headerPicture?: InputMaybe<StrapiPhotographyHeaderPictureFilterInput>;
  seo?: InputMaybe<StrapiPhotographySeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  headerText?: InputMaybe<StringQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPhotographyArgs = {
  filter?: InputMaybe<StrapiPhotographyFilterInput>;
  sort?: InputMaybe<StrapiPhotographySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiPhotographArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  photoTaken?: InputMaybe<DateQueryOperatorInput>;
  seo?: InputMaybe<StrapiPhotographSeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  image?: InputMaybe<StrapiPhotographImageFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPhotographArgs = {
  filter?: InputMaybe<StrapiPhotographFilterInput>;
  sort?: InputMaybe<StrapiPhotographSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiHomeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  bio?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  seo?: InputMaybe<StrapiHomeSeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  profilePicture?: InputMaybe<StrapiHomeProfilePictureFilterInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiHomeArgs = {
  filter?: InputMaybe<StrapiHomeFilterInput>;
  sort?: InputMaybe<StrapiHomeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiGlobalArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  siteLanguage?: InputMaybe<StringQueryOperatorInput>;
  siteName?: InputMaybe<StringQueryOperatorInput>;
  contactEmail?: InputMaybe<StringQueryOperatorInput>;
  socialNetworks?: InputMaybe<StrapiGlobalSocialNetworksFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiGlobalArgs = {
  filter?: InputMaybe<StrapiGlobalFilterInput>;
  sort?: InputMaybe<StrapiGlobalSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  buildTime?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  twitterUsername?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___url'
  | 'siteMetadata___image'
  | 'siteMetadata___twitterUsername'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  fonts?: InputMaybe<SitePluginPluginOptionsFontsFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  apiURL?: InputMaybe<StringQueryOperatorInput>;
  collectionTypes?: InputMaybe<StringQueryOperatorInput>;
  singleTypes?: InputMaybe<StringQueryOperatorInput>;
  queryLimit?: InputMaybe<IntQueryOperatorInput>;
  defaults?: InputMaybe<SitePluginPluginOptionsDefaultsFilterInput>;
  base64Width?: InputMaybe<IntQueryOperatorInput>;
  stripMetadata?: InputMaybe<BooleanQueryOperatorInput>;
  defaultQuality?: InputMaybe<IntQueryOperatorInput>;
  failOnError?: InputMaybe<BooleanQueryOperatorInput>;
  short_name?: InputMaybe<StringQueryOperatorInput>;
  start_url?: InputMaybe<StringQueryOperatorInput>;
  background_color?: InputMaybe<StringQueryOperatorInput>;
  theme_color?: InputMaybe<StringQueryOperatorInput>;
  display?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  legacy?: InputMaybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: InputMaybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: InputMaybe<StringQueryOperatorInput>;
  crossOrigin?: InputMaybe<StringQueryOperatorInput>;
  include_favicon?: InputMaybe<BooleanQueryOperatorInput>;
  cacheDigest?: InputMaybe<StringQueryOperatorInput>;
  pathCheck?: InputMaybe<BooleanQueryOperatorInput>;
  allExtensions?: InputMaybe<BooleanQueryOperatorInput>;
  isTSX?: InputMaybe<BooleanQueryOperatorInput>;
  jsxPragma?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google2?: InputMaybe<SitePluginPluginOptionsFontsGoogle2FilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle2FilterListInput = {
  elemMatch?: InputMaybe<SitePluginPluginOptionsFontsGoogle2FilterInput>;
};

export type SitePluginPluginOptionsFontsGoogle2FilterInput = {
  family?: InputMaybe<StringQueryOperatorInput>;
  axes?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
  formats?: InputMaybe<StringQueryOperatorInput>;
  placeholder?: InputMaybe<StringQueryOperatorInput>;
  quality?: InputMaybe<IntQueryOperatorInput>;
  breakpoints?: InputMaybe<IntQueryOperatorInput>;
  backgroundColor?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  main?: InputMaybe<StringQueryOperatorInput>;
  license?: InputMaybe<StringQueryOperatorInput>;
  dependencies?: InputMaybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___fonts___google2'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___collectionTypes'
  | 'pluginCreator___pluginOptions___singleTypes'
  | 'pluginCreator___pluginOptions___queryLimit'
  | 'pluginCreator___pluginOptions___defaults___formats'
  | 'pluginCreator___pluginOptions___defaults___placeholder'
  | 'pluginCreator___pluginOptions___defaults___quality'
  | 'pluginCreator___pluginOptions___defaults___breakpoints'
  | 'pluginCreator___pluginOptions___defaults___backgroundColor'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  context?: InputMaybe<SitePageContextFilterInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiPhotographyHeaderPictureFilterInput = {
  photoCredit?: InputMaybe<StringQueryOperatorInput>;
  headerPhoto?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoProvider_MetadataFilterInput>;
  formats?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsFilterInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsFilterInput = {
  thumbnail?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailFilterInput>;
  large?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeFilterInput>;
  medium?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumFilterInput>;
  small?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailProvider_MetadataFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsThumbnailProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeProvider_MetadataFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsLargeProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumProvider_MetadataFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsMediumProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallProvider_MetadataFilterInput>;
};

export type StrapiPhotographyHeaderPictureHeaderPhotoFormatsSmallProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographySeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPhotographyEdge>;
  nodes: Array<StrapiPhotography>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiPhotographyGroupConnection>;
};


export type StrapiPhotographyConnectionDistinctArgs = {
  field: StrapiPhotographyFieldsEnum;
};


export type StrapiPhotographyConnectionMaxArgs = {
  field: StrapiPhotographyFieldsEnum;
};


export type StrapiPhotographyConnectionMinArgs = {
  field: StrapiPhotographyFieldsEnum;
};


export type StrapiPhotographyConnectionSumArgs = {
  field: StrapiPhotographyFieldsEnum;
};


export type StrapiPhotographyConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiPhotographyFieldsEnum;
};

export type StrapiPhotographyEdge = {
  next?: Maybe<StrapiPhotography>;
  node: StrapiPhotography;
  previous?: Maybe<StrapiPhotography>;
};

export type StrapiPhotographyFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'published_at'
  | 'headerPicture___photoCredit'
  | 'headerPicture___headerPhoto___name'
  | 'headerPicture___headerPhoto___alternativeText'
  | 'headerPicture___headerPhoto___caption'
  | 'headerPicture___headerPhoto___hash'
  | 'headerPicture___headerPhoto___ext'
  | 'headerPicture___headerPhoto___mime'
  | 'headerPicture___headerPhoto___size'
  | 'headerPicture___headerPhoto___width'
  | 'headerPicture___headerPhoto___height'
  | 'headerPicture___headerPhoto___url'
  | 'headerPicture___headerPhoto___provider_metadata___public_id'
  | 'headerPicture___headerPhoto___provider_metadata___resource_type'
  | 'headerPicture___headerPhoto___provider'
  | 'headerPicture___headerPhoto___createdAt'
  | 'headerPicture___headerPhoto___updatedAt'
  | 'headerPicture___headerPhoto___id'
  | 'headerPicture___headerPhoto___localFile___sourceInstanceName'
  | 'headerPicture___headerPhoto___localFile___absolutePath'
  | 'headerPicture___headerPhoto___localFile___relativePath'
  | 'headerPicture___headerPhoto___localFile___extension'
  | 'headerPicture___headerPhoto___localFile___size'
  | 'headerPicture___headerPhoto___localFile___prettySize'
  | 'headerPicture___headerPhoto___localFile___modifiedTime'
  | 'headerPicture___headerPhoto___localFile___accessTime'
  | 'headerPicture___headerPhoto___localFile___changeTime'
  | 'headerPicture___headerPhoto___localFile___birthTime'
  | 'headerPicture___headerPhoto___localFile___root'
  | 'headerPicture___headerPhoto___localFile___dir'
  | 'headerPicture___headerPhoto___localFile___base'
  | 'headerPicture___headerPhoto___localFile___ext'
  | 'headerPicture___headerPhoto___localFile___name'
  | 'headerPicture___headerPhoto___localFile___relativeDirectory'
  | 'headerPicture___headerPhoto___localFile___dev'
  | 'headerPicture___headerPhoto___localFile___mode'
  | 'headerPicture___headerPhoto___localFile___nlink'
  | 'headerPicture___headerPhoto___localFile___uid'
  | 'headerPicture___headerPhoto___localFile___gid'
  | 'headerPicture___headerPhoto___localFile___rdev'
  | 'headerPicture___headerPhoto___localFile___ino'
  | 'headerPicture___headerPhoto___localFile___atimeMs'
  | 'headerPicture___headerPhoto___localFile___mtimeMs'
  | 'headerPicture___headerPhoto___localFile___ctimeMs'
  | 'headerPicture___headerPhoto___localFile___atime'
  | 'headerPicture___headerPhoto___localFile___mtime'
  | 'headerPicture___headerPhoto___localFile___ctime'
  | 'headerPicture___headerPhoto___localFile___birthtime'
  | 'headerPicture___headerPhoto___localFile___birthtimeMs'
  | 'headerPicture___headerPhoto___localFile___blksize'
  | 'headerPicture___headerPhoto___localFile___blocks'
  | 'headerPicture___headerPhoto___localFile___url'
  | 'headerPicture___headerPhoto___localFile___publicURL'
  | 'headerPicture___headerPhoto___localFile___childrenImageSharp'
  | 'headerPicture___headerPhoto___localFile___id'
  | 'headerPicture___headerPhoto___localFile___children'
  | 'headerPicture___id'
  | 'seo___title'
  | 'seo___description'
  | 'seo___id'
  | 'createdAt'
  | 'updatedAt'
  | 'headerText'
  | 'strapiId';

export type StrapiPhotographyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPhotographyEdge>;
  nodes: Array<StrapiPhotography>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPhotographyFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  published_at?: InputMaybe<DateQueryOperatorInput>;
  headerPicture?: InputMaybe<StrapiPhotographyHeaderPictureFilterInput>;
  seo?: InputMaybe<StrapiPhotographySeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  headerText?: InputMaybe<StringQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographySortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiPhotographyFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiPhotographSeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographImageFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographImageProvider_MetadataFilterInput>;
  formats?: InputMaybe<StrapiPhotographImageFormatsFilterInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  related?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type StrapiPhotographImageProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographImageFormatsFilterInput = {
  thumbnail?: InputMaybe<StrapiPhotographImageFormatsThumbnailFilterInput>;
  large?: InputMaybe<StrapiPhotographImageFormatsLargeFilterInput>;
  medium?: InputMaybe<StrapiPhotographImageFormatsMediumFilterInput>;
  small?: InputMaybe<StrapiPhotographImageFormatsSmallFilterInput>;
};

export type StrapiPhotographImageFormatsThumbnailFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographImageFormatsThumbnailProvider_MetadataFilterInput>;
};

export type StrapiPhotographImageFormatsThumbnailProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographImageFormatsLargeFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographImageFormatsLargeProvider_MetadataFilterInput>;
};

export type StrapiPhotographImageFormatsLargeProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographImageFormatsMediumFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographImageFormatsMediumProvider_MetadataFilterInput>;
};

export type StrapiPhotographImageFormatsMediumProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographImageFormatsSmallFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiPhotographImageFormatsSmallProvider_MetadataFilterInput>;
};

export type StrapiPhotographImageFormatsSmallProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPhotographEdge>;
  nodes: Array<StrapiPhotograph>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiPhotographGroupConnection>;
};


export type StrapiPhotographConnectionDistinctArgs = {
  field: StrapiPhotographFieldsEnum;
};


export type StrapiPhotographConnectionMaxArgs = {
  field: StrapiPhotographFieldsEnum;
};


export type StrapiPhotographConnectionMinArgs = {
  field: StrapiPhotographFieldsEnum;
};


export type StrapiPhotographConnectionSumArgs = {
  field: StrapiPhotographFieldsEnum;
};


export type StrapiPhotographConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiPhotographFieldsEnum;
};

export type StrapiPhotographEdge = {
  next?: Maybe<StrapiPhotograph>;
  node: StrapiPhotograph;
  previous?: Maybe<StrapiPhotograph>;
};

export type StrapiPhotographFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'photoTaken'
  | 'seo___title'
  | 'seo___id'
  | 'createdAt'
  | 'updatedAt'
  | 'image___name'
  | 'image___alternativeText'
  | 'image___caption'
  | 'image___hash'
  | 'image___ext'
  | 'image___mime'
  | 'image___size'
  | 'image___width'
  | 'image___height'
  | 'image___url'
  | 'image___provider_metadata___public_id'
  | 'image___provider_metadata___resource_type'
  | 'image___formats___thumbnail___name'
  | 'image___formats___thumbnail___hash'
  | 'image___formats___thumbnail___ext'
  | 'image___formats___thumbnail___mime'
  | 'image___formats___thumbnail___width'
  | 'image___formats___thumbnail___height'
  | 'image___formats___thumbnail___size'
  | 'image___formats___thumbnail___url'
  | 'image___formats___large___name'
  | 'image___formats___large___hash'
  | 'image___formats___large___ext'
  | 'image___formats___large___mime'
  | 'image___formats___large___width'
  | 'image___formats___large___height'
  | 'image___formats___large___size'
  | 'image___formats___large___url'
  | 'image___formats___medium___name'
  | 'image___formats___medium___hash'
  | 'image___formats___medium___ext'
  | 'image___formats___medium___mime'
  | 'image___formats___medium___width'
  | 'image___formats___medium___height'
  | 'image___formats___medium___size'
  | 'image___formats___medium___url'
  | 'image___formats___small___name'
  | 'image___formats___small___hash'
  | 'image___formats___small___ext'
  | 'image___formats___small___mime'
  | 'image___formats___small___width'
  | 'image___formats___small___height'
  | 'image___formats___small___size'
  | 'image___formats___small___url'
  | 'image___provider'
  | 'image___related'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___id'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___publicURL'
  | 'image___localFile___childrenImageSharp'
  | 'image___localFile___childrenImageSharp___gatsbyImageData'
  | 'image___localFile___childrenImageSharp___id'
  | 'image___localFile___childrenImageSharp___children'
  | 'image___localFile___childImageSharp___gatsbyImageData'
  | 'image___localFile___childImageSharp___id'
  | 'image___localFile___childImageSharp___children'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'slug'
  | 'strapiId';

export type StrapiPhotographGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPhotographEdge>;
  nodes: Array<StrapiPhotograph>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPhotographFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  photoTaken?: InputMaybe<DateQueryOperatorInput>;
  seo?: InputMaybe<StrapiPhotographSeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  image?: InputMaybe<StrapiPhotographImageFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiPhotographSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiPhotographFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiHomeSeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  shareImage?: InputMaybe<StrapiHomeSeoShareImageFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSeoShareImageFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeSeoShareImageProvider_MetadataFilterInput>;
  formats?: InputMaybe<StrapiHomeSeoShareImageFormatsFilterInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type StrapiHomeSeoShareImageProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSeoShareImageFormatsFilterInput = {
  thumbnail?: InputMaybe<StrapiHomeSeoShareImageFormatsThumbnailFilterInput>;
  large?: InputMaybe<StrapiHomeSeoShareImageFormatsLargeFilterInput>;
  medium?: InputMaybe<StrapiHomeSeoShareImageFormatsMediumFilterInput>;
  small?: InputMaybe<StrapiHomeSeoShareImageFormatsSmallFilterInput>;
};

export type StrapiHomeSeoShareImageFormatsThumbnailFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeSeoShareImageFormatsThumbnailProvider_MetadataFilterInput>;
};

export type StrapiHomeSeoShareImageFormatsThumbnailProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSeoShareImageFormatsLargeFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeSeoShareImageFormatsLargeProvider_MetadataFilterInput>;
};

export type StrapiHomeSeoShareImageFormatsLargeProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSeoShareImageFormatsMediumFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeSeoShareImageFormatsMediumProvider_MetadataFilterInput>;
};

export type StrapiHomeSeoShareImageFormatsMediumProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSeoShareImageFormatsSmallFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeSeoShareImageFormatsSmallProvider_MetadataFilterInput>;
};

export type StrapiHomeSeoShareImageFormatsSmallProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeProfilePictureFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeProfilePictureProvider_MetadataFilterInput>;
  formats?: InputMaybe<StrapiHomeProfilePictureFormatsFilterInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  related?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type StrapiHomeProfilePictureProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeProfilePictureFormatsFilterInput = {
  thumbnail?: InputMaybe<StrapiHomeProfilePictureFormatsThumbnailFilterInput>;
  large?: InputMaybe<StrapiHomeProfilePictureFormatsLargeFilterInput>;
  medium?: InputMaybe<StrapiHomeProfilePictureFormatsMediumFilterInput>;
  small?: InputMaybe<StrapiHomeProfilePictureFormatsSmallFilterInput>;
};

export type StrapiHomeProfilePictureFormatsThumbnailFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeProfilePictureFormatsThumbnailProvider_MetadataFilterInput>;
};

export type StrapiHomeProfilePictureFormatsThumbnailProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeProfilePictureFormatsLargeFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeProfilePictureFormatsLargeProvider_MetadataFilterInput>;
};

export type StrapiHomeProfilePictureFormatsLargeProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeProfilePictureFormatsMediumFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeProfilePictureFormatsMediumProvider_MetadataFilterInput>;
};

export type StrapiHomeProfilePictureFormatsMediumProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeProfilePictureFormatsSmallFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiHomeProfilePictureFormatsSmallProvider_MetadataFilterInput>;
};

export type StrapiHomeProfilePictureFormatsSmallProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomeEdge>;
  nodes: Array<StrapiHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiHomeGroupConnection>;
};


export type StrapiHomeConnectionDistinctArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionMaxArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionMinArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionSumArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiHomeFieldsEnum;
};

export type StrapiHomeEdge = {
  next?: Maybe<StrapiHome>;
  node: StrapiHome;
  previous?: Maybe<StrapiHome>;
};

export type StrapiHomeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'bio'
  | 'title'
  | 'seo___title'
  | 'seo___description'
  | 'seo___shareImage___name'
  | 'seo___shareImage___alternativeText'
  | 'seo___shareImage___caption'
  | 'seo___shareImage___hash'
  | 'seo___shareImage___ext'
  | 'seo___shareImage___mime'
  | 'seo___shareImage___size'
  | 'seo___shareImage___width'
  | 'seo___shareImage___height'
  | 'seo___shareImage___url'
  | 'seo___shareImage___provider_metadata___public_id'
  | 'seo___shareImage___provider_metadata___resource_type'
  | 'seo___shareImage___provider'
  | 'seo___shareImage___createdAt'
  | 'seo___shareImage___updatedAt'
  | 'seo___shareImage___id'
  | 'seo___shareImage___localFile___sourceInstanceName'
  | 'seo___shareImage___localFile___absolutePath'
  | 'seo___shareImage___localFile___relativePath'
  | 'seo___shareImage___localFile___extension'
  | 'seo___shareImage___localFile___size'
  | 'seo___shareImage___localFile___prettySize'
  | 'seo___shareImage___localFile___modifiedTime'
  | 'seo___shareImage___localFile___accessTime'
  | 'seo___shareImage___localFile___changeTime'
  | 'seo___shareImage___localFile___birthTime'
  | 'seo___shareImage___localFile___root'
  | 'seo___shareImage___localFile___dir'
  | 'seo___shareImage___localFile___base'
  | 'seo___shareImage___localFile___ext'
  | 'seo___shareImage___localFile___name'
  | 'seo___shareImage___localFile___relativeDirectory'
  | 'seo___shareImage___localFile___dev'
  | 'seo___shareImage___localFile___mode'
  | 'seo___shareImage___localFile___nlink'
  | 'seo___shareImage___localFile___uid'
  | 'seo___shareImage___localFile___gid'
  | 'seo___shareImage___localFile___rdev'
  | 'seo___shareImage___localFile___ino'
  | 'seo___shareImage___localFile___atimeMs'
  | 'seo___shareImage___localFile___mtimeMs'
  | 'seo___shareImage___localFile___ctimeMs'
  | 'seo___shareImage___localFile___atime'
  | 'seo___shareImage___localFile___mtime'
  | 'seo___shareImage___localFile___ctime'
  | 'seo___shareImage___localFile___birthtime'
  | 'seo___shareImage___localFile___birthtimeMs'
  | 'seo___shareImage___localFile___blksize'
  | 'seo___shareImage___localFile___blocks'
  | 'seo___shareImage___localFile___url'
  | 'seo___shareImage___localFile___publicURL'
  | 'seo___shareImage___localFile___childrenImageSharp'
  | 'seo___shareImage___localFile___id'
  | 'seo___shareImage___localFile___children'
  | 'seo___id'
  | 'createdAt'
  | 'updatedAt'
  | 'profilePicture___name'
  | 'profilePicture___alternativeText'
  | 'profilePicture___caption'
  | 'profilePicture___hash'
  | 'profilePicture___ext'
  | 'profilePicture___mime'
  | 'profilePicture___size'
  | 'profilePicture___width'
  | 'profilePicture___height'
  | 'profilePicture___url'
  | 'profilePicture___provider_metadata___public_id'
  | 'profilePicture___provider_metadata___resource_type'
  | 'profilePicture___formats___thumbnail___name'
  | 'profilePicture___formats___thumbnail___hash'
  | 'profilePicture___formats___thumbnail___ext'
  | 'profilePicture___formats___thumbnail___mime'
  | 'profilePicture___formats___thumbnail___width'
  | 'profilePicture___formats___thumbnail___height'
  | 'profilePicture___formats___thumbnail___size'
  | 'profilePicture___formats___thumbnail___url'
  | 'profilePicture___formats___large___name'
  | 'profilePicture___formats___large___hash'
  | 'profilePicture___formats___large___ext'
  | 'profilePicture___formats___large___mime'
  | 'profilePicture___formats___large___width'
  | 'profilePicture___formats___large___height'
  | 'profilePicture___formats___large___size'
  | 'profilePicture___formats___large___url'
  | 'profilePicture___formats___medium___name'
  | 'profilePicture___formats___medium___hash'
  | 'profilePicture___formats___medium___ext'
  | 'profilePicture___formats___medium___mime'
  | 'profilePicture___formats___medium___width'
  | 'profilePicture___formats___medium___height'
  | 'profilePicture___formats___medium___size'
  | 'profilePicture___formats___medium___url'
  | 'profilePicture___formats___small___name'
  | 'profilePicture___formats___small___hash'
  | 'profilePicture___formats___small___ext'
  | 'profilePicture___formats___small___mime'
  | 'profilePicture___formats___small___width'
  | 'profilePicture___formats___small___height'
  | 'profilePicture___formats___small___size'
  | 'profilePicture___formats___small___url'
  | 'profilePicture___provider'
  | 'profilePicture___related'
  | 'profilePicture___createdAt'
  | 'profilePicture___updatedAt'
  | 'profilePicture___id'
  | 'profilePicture___localFile___sourceInstanceName'
  | 'profilePicture___localFile___absolutePath'
  | 'profilePicture___localFile___relativePath'
  | 'profilePicture___localFile___extension'
  | 'profilePicture___localFile___size'
  | 'profilePicture___localFile___prettySize'
  | 'profilePicture___localFile___modifiedTime'
  | 'profilePicture___localFile___accessTime'
  | 'profilePicture___localFile___changeTime'
  | 'profilePicture___localFile___birthTime'
  | 'profilePicture___localFile___root'
  | 'profilePicture___localFile___dir'
  | 'profilePicture___localFile___base'
  | 'profilePicture___localFile___ext'
  | 'profilePicture___localFile___name'
  | 'profilePicture___localFile___relativeDirectory'
  | 'profilePicture___localFile___dev'
  | 'profilePicture___localFile___mode'
  | 'profilePicture___localFile___nlink'
  | 'profilePicture___localFile___uid'
  | 'profilePicture___localFile___gid'
  | 'profilePicture___localFile___rdev'
  | 'profilePicture___localFile___ino'
  | 'profilePicture___localFile___atimeMs'
  | 'profilePicture___localFile___mtimeMs'
  | 'profilePicture___localFile___ctimeMs'
  | 'profilePicture___localFile___atime'
  | 'profilePicture___localFile___mtime'
  | 'profilePicture___localFile___ctime'
  | 'profilePicture___localFile___birthtime'
  | 'profilePicture___localFile___birthtimeMs'
  | 'profilePicture___localFile___blksize'
  | 'profilePicture___localFile___blocks'
  | 'profilePicture___localFile___url'
  | 'profilePicture___localFile___publicURL'
  | 'profilePicture___localFile___childrenImageSharp'
  | 'profilePicture___localFile___childrenImageSharp___gatsbyImageData'
  | 'profilePicture___localFile___childrenImageSharp___id'
  | 'profilePicture___localFile___childrenImageSharp___children'
  | 'profilePicture___localFile___childImageSharp___gatsbyImageData'
  | 'profilePicture___localFile___childImageSharp___id'
  | 'profilePicture___localFile___childImageSharp___children'
  | 'profilePicture___localFile___id'
  | 'profilePicture___localFile___parent___id'
  | 'profilePicture___localFile___parent___children'
  | 'profilePicture___localFile___children'
  | 'profilePicture___localFile___children___id'
  | 'profilePicture___localFile___children___children'
  | 'profilePicture___localFile___internal___content'
  | 'profilePicture___localFile___internal___contentDigest'
  | 'profilePicture___localFile___internal___description'
  | 'profilePicture___localFile___internal___fieldOwners'
  | 'profilePicture___localFile___internal___ignoreType'
  | 'profilePicture___localFile___internal___mediaType'
  | 'profilePicture___localFile___internal___owner'
  | 'profilePicture___localFile___internal___type'
  | 'strapiId';

export type StrapiHomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomeEdge>;
  nodes: Array<StrapiHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiHomeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  bio?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  seo?: InputMaybe<StrapiHomeSeoFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  profilePicture?: InputMaybe<StrapiHomeProfilePictureFilterInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiHomeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiHomeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiGlobalSocialNetworksFilterListInput = {
  elemMatch?: InputMaybe<StrapiGlobalSocialNetworksFilterInput>;
};

export type StrapiGlobalSocialNetworksFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StrapiGlobalSocialNetworksIconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiGlobalSocialNetworksIconFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<StrapiGlobalSocialNetworksIconProvider_MetadataFilterInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type StrapiGlobalSocialNetworksIconProvider_MetadataFilterInput = {
  public_id?: InputMaybe<StringQueryOperatorInput>;
  resource_type?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiGlobalConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiGlobalEdge>;
  nodes: Array<StrapiGlobal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiGlobalGroupConnection>;
};


export type StrapiGlobalConnectionDistinctArgs = {
  field: StrapiGlobalFieldsEnum;
};


export type StrapiGlobalConnectionMaxArgs = {
  field: StrapiGlobalFieldsEnum;
};


export type StrapiGlobalConnectionMinArgs = {
  field: StrapiGlobalFieldsEnum;
};


export type StrapiGlobalConnectionSumArgs = {
  field: StrapiGlobalFieldsEnum;
};


export type StrapiGlobalConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiGlobalFieldsEnum;
};

export type StrapiGlobalEdge = {
  next?: Maybe<StrapiGlobal>;
  node: StrapiGlobal;
  previous?: Maybe<StrapiGlobal>;
};

export type StrapiGlobalFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'siteLanguage'
  | 'siteName'
  | 'contactEmail'
  | 'socialNetworks'
  | 'socialNetworks___title'
  | 'socialNetworks___url'
  | 'socialNetworks___icon___name'
  | 'socialNetworks___icon___alternativeText'
  | 'socialNetworks___icon___caption'
  | 'socialNetworks___icon___hash'
  | 'socialNetworks___icon___ext'
  | 'socialNetworks___icon___mime'
  | 'socialNetworks___icon___size'
  | 'socialNetworks___icon___url'
  | 'socialNetworks___icon___provider_metadata___public_id'
  | 'socialNetworks___icon___provider_metadata___resource_type'
  | 'socialNetworks___icon___provider'
  | 'socialNetworks___icon___width'
  | 'socialNetworks___icon___height'
  | 'socialNetworks___icon___createdAt'
  | 'socialNetworks___icon___updatedAt'
  | 'socialNetworks___icon___id'
  | 'socialNetworks___icon___localFile___sourceInstanceName'
  | 'socialNetworks___icon___localFile___absolutePath'
  | 'socialNetworks___icon___localFile___relativePath'
  | 'socialNetworks___icon___localFile___extension'
  | 'socialNetworks___icon___localFile___size'
  | 'socialNetworks___icon___localFile___prettySize'
  | 'socialNetworks___icon___localFile___modifiedTime'
  | 'socialNetworks___icon___localFile___accessTime'
  | 'socialNetworks___icon___localFile___changeTime'
  | 'socialNetworks___icon___localFile___birthTime'
  | 'socialNetworks___icon___localFile___root'
  | 'socialNetworks___icon___localFile___dir'
  | 'socialNetworks___icon___localFile___base'
  | 'socialNetworks___icon___localFile___ext'
  | 'socialNetworks___icon___localFile___name'
  | 'socialNetworks___icon___localFile___relativeDirectory'
  | 'socialNetworks___icon___localFile___dev'
  | 'socialNetworks___icon___localFile___mode'
  | 'socialNetworks___icon___localFile___nlink'
  | 'socialNetworks___icon___localFile___uid'
  | 'socialNetworks___icon___localFile___gid'
  | 'socialNetworks___icon___localFile___rdev'
  | 'socialNetworks___icon___localFile___ino'
  | 'socialNetworks___icon___localFile___atimeMs'
  | 'socialNetworks___icon___localFile___mtimeMs'
  | 'socialNetworks___icon___localFile___ctimeMs'
  | 'socialNetworks___icon___localFile___atime'
  | 'socialNetworks___icon___localFile___mtime'
  | 'socialNetworks___icon___localFile___ctime'
  | 'socialNetworks___icon___localFile___birthtime'
  | 'socialNetworks___icon___localFile___birthtimeMs'
  | 'socialNetworks___icon___localFile___blksize'
  | 'socialNetworks___icon___localFile___blocks'
  | 'socialNetworks___icon___localFile___url'
  | 'socialNetworks___icon___localFile___publicURL'
  | 'socialNetworks___icon___localFile___childrenImageSharp'
  | 'socialNetworks___icon___localFile___id'
  | 'socialNetworks___icon___localFile___children'
  | 'socialNetworks___id'
  | 'createdAt'
  | 'updatedAt'
  | 'strapiId';

export type StrapiGlobalGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiGlobalEdge>;
  nodes: Array<StrapiGlobal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiGlobalFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  siteLanguage?: InputMaybe<StringQueryOperatorInput>;
  siteName?: InputMaybe<StringQueryOperatorInput>;
  contactEmail?: InputMaybe<StringQueryOperatorInput>;
  socialNetworks?: InputMaybe<StrapiGlobalSocialNetworksFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  strapiId?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiGlobalSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiGlobalFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___fonts___google2'
  | 'pluginOptions___fonts___google2___family'
  | 'pluginOptions___fonts___google2___axes'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___apiURL'
  | 'pluginOptions___collectionTypes'
  | 'pluginOptions___singleTypes'
  | 'pluginOptions___queryLimit'
  | 'pluginOptions___defaults___formats'
  | 'pluginOptions___defaults___placeholder'
  | 'pluginOptions___defaults___quality'
  | 'pluginOptions___defaults___breakpoints'
  | 'pluginOptions___defaults___backgroundColor'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  buildTime?: InputMaybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = { strapiGlobal?: { contactEmail?: string | null | undefined, siteName?: string | null | undefined, siteLanguage?: string | null | undefined, socialNetworks?: Array<{ url?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: { siteMetadata?: { description?: string | null | undefined, author?: string | null | undefined, twitterUsername?: string | null | undefined, url?: string | null | undefined, image?: string | null | undefined, defaultTitle?: string | null | undefined } | null | undefined } | null | undefined };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { strapiHome?: { title?: string | null | undefined, bio?: string | null | undefined, profilePicture?: { localFile?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, seo?: { title?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined };

export type PhotographyPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotographyPageQuery = { strapiPhotography?: { title?: string | null | undefined, headerText?: string | null | undefined, headerPicture?: { photoCredit?: string | null | undefined, headerPhoto?: { alternativeText?: string | null | undefined, localFile?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined } | null | undefined, seo?: { title?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined, allStrapiPhotograph: { edges: Array<{ node: { id: string, photoTaken?: any | null | undefined, title?: string | null | undefined, slug?: string | null | undefined, seo?: { title?: string | null | undefined } | null | undefined, image?: { localFile?: { childImageSharp?: { gatsbyImageData: any, fluid?: { aspectRatio: number } | null | undefined } | null | undefined } | null | undefined } | null | undefined } }> } };

export type SinglePhotographQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SinglePhotographQuery = { strapiPhotograph?: { id: string, photoTaken?: any | null | undefined, seo?: { title?: string | null | undefined, id?: string | null | undefined } | null | undefined, image?: { alternativeText?: string | null | undefined, caption?: string | null | undefined, localFile?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
