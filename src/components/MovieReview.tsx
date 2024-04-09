import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../utils/constants';

type ReviewProps = {
  review: {
    author: {
      nickName: string;
      authorRating: number;
    };

    submissionDate: string;
    summary: {
      originalText: string;
    };
    text: {
      originalText: {
        plainText: string;
      };
    };
  };
};

export const MovieReview: React.FC<ReviewProps> = ({review}) => {
  const {author, text} = review;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Review</Text>
      <Text style={styles.description}>"{text?.originalText?.plainText}"</Text>
      <Text style={styles.author}>-{author?.nickName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.netflixRed,
  },
  description: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 5,
  },
  author: {
    color: 'white',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
