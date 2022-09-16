import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';

import { getCategoriesThunk } from 'src/features/category/redux/category.thunks';
import { selectCategories } from 'src/features/category/redux/category.selectors';

import Directory from 'src/features/category/components/Directory';

const Home: React.FC = () => {
  // const directories: DirectoryProps[] = [
  //   {
  //     id: 1,
  //     title: 'hats',
  //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'jackets',
  //     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'sneakers',
  //     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'womens',
  //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'mens',
  //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //   },
  // ];
  const dispatch = useAppDispatch();
  const directories = useAppSelector(selectCategories);
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return <Directory directories={directories} />;
};

export default Home;
