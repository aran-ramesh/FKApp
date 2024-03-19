import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
const image = {uri: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85'};
const ListPage = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Pizza Hut</Title>
          <Paragraph>Italian, Fast Food, Beverages</Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Pizza Hut</Title>
          <Paragraph>Italian, Fast Food, Beverages</Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Pizza Hut</Title>
          <Paragraph>Italian, Fast Food, Beverages</Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Pizza Hut</Title>
          <Paragraph>Italian, Fast Food, Beverages</Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Cover source={image} />
        <Card.Content>
          <Title>Pizza Hut</Title>
          <Paragraph>Italian, Fast Food, Beverages</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   padding:10
  },
});

export default ListPage;
