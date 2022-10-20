type SortItem = {
  id: number;
  name: string;
  sortProp: string;
};

export const valuesSort: SortItem[] = [
  {
    id: 1,
    name: "популярности ⥣",
    sortProp: "rating",
  },
  {
    id: 2,
    name: "популярности ⥥",
    sortProp: "-rating",
  },
  {
    id: 3,
    name: "цене ⥣",
    sortProp: "price",
  },
  {
    id: 4,
    name: "цене ⥥",
    sortProp: "-price",
  },
  {
    id: 5,
    name: "алфавиту ⥣",
    sortProp: "title",
  },
  {
    id: 6,
    name: "алфавиту ⥥",
    sortProp: "-title",
  },
];
