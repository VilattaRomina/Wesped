import React from "react";
import Categories from "./categories/Categories";
import SearchBlock from "./searchBlock/SearchBlock";
import Recommendations from "./recommendations/Recommendations";
import { useState, useEffect } from "react";
import { AxiosInstance } from "../../helpers/AxiosHelper";
import Section from "../../components/section/Section";
import Spinner from '../../components/spinner/Spinner'
import Body from "../../components/body/Body";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [loaded, setLoaded] = useState(true);

  const setProductsToDisplayByCity = (city) => setProducts(city);

  useEffect(() => {
    setLoaded(false)
    AxiosInstance.get("/products").then((res) => {
      let products = res.data;

      if ((products.length % 2) !== 0)
        products = products.slice(0, products.length - 1);

      setProducts(products)

    }).then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const url = selectedCategory
      ? `/products/category/${selectedCategory}`
      : "/products";
    setLoaded(false);
    AxiosInstance.get(`${url}`).then((res) => {
      setProducts(res.data)
      setLoaded(true)
    });
  }, [selectedCategory]);

  return (
    <>
      {!loaded && <Spinner>Cargando...</Spinner>}
      <Body>
      <SearchBlock setProductsToDisplayByCity={setProductsToDisplayByCity} setRecommendationsTitle={setTitle} setLoaded={setLoaded}/>
      <Section> 
        <Categories setSelectedCategory={setSelectedCategory} setRecommendationsTitle={setTitle} />
        <Recommendations products={products} selectedCategory={selectedCategory} title={title} />
      </Section>
      </Body>

    </>
  );
};

export default Home;
