export class Product{
    id:number = 0;
    name:String = "";
    imgsrc:string="";
    imgsrc1:string="";
    imgsrc2:string="";
    imgsrc3:string="";
    startingprice:number=0;
    sizedetails:Size[] = [];
    flange:string[]=[];
    dimensiondetails:Dimension[]=[];
    lubrication:string[]=[];
    fitting:string[]=[];
    material:string[]=[];
    description:string="";
    features : string[] = [];
    example : string[] = []
}

class Size{
    size : string = "";
    price : number = 0;
}

class Dimension{
    dimension : string = "";
    price : number = 0;
}