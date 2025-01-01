export interface TString {
    name: string,
}
export interface TPageHeader {
  isHaveHeader: boolean,
}
export interface CustomTitleProps {
    title :string
  }

export interface SingleServiceProps{
    description: string,
    title:string
    image:string,
}

export type THeaderLink = {
    text: string;
    isMulti?:boolean,
    extraText?:string,
    extraLink?:string,
};

export type THeaderPage = {
  isHaveHeader?: boolean;
  data?:any,
  isLoading?:boolean,
};