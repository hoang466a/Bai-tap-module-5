import {Category} from "../category/category";

export interface LandTitle {
id: number;
category: Category;
local: string;
level: string;
titleType: string;
status: string;
address: string;
area: string;
direction: string;
title: string;
content: string;
price: string;
priceCheck: boolean;
imageUrl: string;
datePost: Date;
}
