import React,{useState} from "react";
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const image = {
  uri: "https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=",
};
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ListPage = () => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);

  const toggleHeartSelection = () => {
    setIsHeartSelected(!isHeartSelected);
  };

  const Restaurentdata = [
    {
      id: 1,
      title: "TeaBon",
      img: "https://www.mashed.com/img/gallery/14-types-of-green-tea-and-what-makes-them-different/intro-1656081253.jpg",
      rating: "4.5",
      distance: "2.5 km",
      cuisine: ["Italian", "Fast Food", "Beverages"],
      deliverytime: "20 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 2,
      title: "Nellai Restaurant",
      img: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg",
      rating: "3.9",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 3,
      title: "The Brownie Studio",
      img: "https://i.pinimg.com/originals/51/99/44/519944f37f3f8f436cda3c2859369c91.jpg",
      rating: "4.0",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 4,
      title: "Thoppi vapa briyani",
      img: "https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
      rating: "3.4",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 5,
      title: "The Brownie Studio",
      img: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg",
      rating: "4.3",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 6,
      title: "The Brownie Studio",
      img: "https://i.pinimg.com/originals/51/99/44/519944f37f3f8f436cda3c2859369c91.jpg",
      rating: "4.0",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 7,
      title: "Thoppi vapa briyani",
      img: "https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
      rating: "3.4",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
    {
      id: 8,
      title: "The Brownie Studio",
      img: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg",
      rating: "4.3",
      distance: "4 km",
      cuisine: ["Bakery", "Cake", "Sweet"],
      deliverytime: "10 mins",
      offer: "20% OFF up to 50 + 30 cashback",
      isFreedelivery: "Free Delivery",
    },
  ];


  const SelectableHeartIcon = ({ selected, onSelect }) => {
    return (
      <TouchableOpacity onPress={onSelect} style={styles.heartIconContainer}>
        <FontAwesome name={selected ? 'heart' : 'heart-o'} size={24} color={selected ? 'red' : 'white'} />
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFoodcards = ({ item }) => (
    <Card style={styles.card}>
      <SelectableHeartIcon selected={isHeartSelected} onSelect={toggleHeartSelection} />
      <Card.Cover source={{ uri: item.img }} style={styles.cardCover} />
      <Card.Content>
        <View style={styles.restastyle}>
          <Title style={styles.cardtitle}>{item.title}</Title>
          <View style={styles.cardrateparent}>
            <Title style={styles.cardrate}>{item.rating}</Title>
            <FontAwesome
              name="star"
              size={12}
              color="gold"
              style={styles.starIcon}
            />
          </View>
        </View>
        <Paragraph>{item.cuisine.join(", ")}</Paragraph>
        <View style={styles.ratingcont}>
          <View style={styles.ratingItem}>
            <MaterialCommunityIcons name="timer" size={15} color="black" />
            <Paragraph style={styles.distance}>{item.deliverytime}</Paragraph>
          </View>
          <View style={styles.ratingItem}>
            <View style={styles.dotDivider}></View>
            <Paragraph style={styles.distance}>{item.distance}</Paragraph>
          </View>
          <View style={styles.ratingItem}>
            <View style={styles.dotDivider}></View>
            <Paragraph style={styles.isFreedelivery}>
              {item.isFreedelivery}
            </Paragraph>
          </View>
        </View>

        <View style={styles.offcontainer}>
          <Text style={styles.offtext}>
            <MaterialIcons
              name="local-offer"
              size={13}
              color="black"
              style={styles.officon}
            />{" "}
            {item.offer}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Restaurentdata}
        renderItem={renderFoodcards}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#fff"
  },
  card: {
    width: "95%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },
  // cardCover: {
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  // },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
  },
  dotsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginVertical: 2,
    marginRight: 10,
    marginLeft: 20,
  },
  restastyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardrateparent: {
    backgroundColor: "#257e3e",
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  cardrate: {
    backgroundColor: "#257e3e",
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  starIcon: {
    marginLeft: 2,
  },
  cardtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#214357",
  },
  ratingcont: {
    flexDirection: "row",
    // justifyContent: 'space-around',
    marginTop: 10,
    gap: 3,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
  },
  ratingItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotDivider: {
    width: 4, // Adjust the width of the dot divider as needed
    height: 4, // Adjust the height of the dot divider as needed
    borderRadius: 2, // Make it a circle
    backgroundColor: "black", // Color of the dot divider
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    // gap:
  },
  distance: {
    fontSize: 13,
    fontWeight: "500",
    color: "grey",
    gap: 10,
  },
  isFreedelivery: {
    fontSize: 13,
    fontWeight: "500",
    color: "brown",
  },
  offcontainer: {
    flexDirection: "column",
  },
  offtext: {
    fontSize: 13,
    fontWeight: "500",
    color: "blue",
    marginTop: 10,
  },
  officon: {
    fontSize: 13,
    color: "blue",
    paddingRight: 5, // Add paddingRight to create a gap between the icon and text
  },
});

export default ListPage;
