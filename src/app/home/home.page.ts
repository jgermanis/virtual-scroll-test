import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: {name: string, imgSrc: string}[] = [];

  constructor() {
    this.items = images.map((src, ind) => ({name: 'name ' + ind, imgSrc: src}));
  }
}

const images = [
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Happy&eyebrowType=SadConcerned&mouthType=Default&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Kurt&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Smile&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Hearts&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Black',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Pale',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Sunglasses&hairColor=Red&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=PastelBlue&eyeType=Squint&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Tanned',
  'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Sunglasses&hatColor=Blue03&hairColor=Brown&facialHairType=Blank&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=PastelGreen&graphicType=Skull&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Disbelief&skinColor=Light',
  'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Sunglasses&hatColor=Red&clotheType=BlazerSweater&clotheColor=Gray02&graphicType=Bat&eyeType=Side&eyebrowType=Angry&mouthType=ScreamOpen&skinColor=Black',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Kurt&hatColor=Blue03&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=ScreamOpen&skinColor=Yellow',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=SilverGray&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Cry&eyebrowType=FlatNatural&mouthType=Eating&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMagestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Pink&eyeType=Hearts&eyebrowType=Default&mouthType=Eating&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Prescription01&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=CollarSweater&clotheColor=Pink&eyeType=Close&eyebrowType=Angry&mouthType=Grimace&skinColor=Yellow',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Happy&eyebrowType=SadConcerned&mouthType=Default&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Kurt&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Smile&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Hearts&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Black',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Pale',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Sunglasses&hairColor=Red&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=PastelBlue&eyeType=Squint&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Tanned',
  'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Sunglasses&hatColor=Blue03&hairColor=Brown&facialHairType=Blank&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=PastelGreen&graphicType=Skull&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Disbelief&skinColor=Light',
  'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Sunglasses&hatColor=Red&clotheType=BlazerSweater&clotheColor=Gray02&graphicType=Bat&eyeType=Side&eyebrowType=Angry&mouthType=ScreamOpen&skinColor=Black',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Kurt&hatColor=Blue03&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=ScreamOpen&skinColor=Yellow',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=SilverGray&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Cry&eyebrowType=FlatNatural&mouthType=Eating&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMagestic&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Pink&eyeType=Hearts&eyebrowType=Default&mouthType=Eating&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Prescription01&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=CollarSweater&clotheColor=Pink&eyeType=Close&eyebrowType=Angry&mouthType=Grimace&skinColor=Yellow',
];


