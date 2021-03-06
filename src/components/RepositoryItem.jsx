import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	item: {
		backgroundColor: theme.colors.white,
		flex: 0,
		padding: 10,
	},
	logo: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
	top: { flexDirection: 'row' },
	title: {
		flex: 1,
		marginLeft: 15,
		alignItems: 'flex-start',
	},
	language: {
		padding: 4,
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		borderRadius: 3,
		marginTop: 10,
		marginBottom: 10,
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	statsSection: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const kFormatter = (num) => (Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num));

const RepositoryItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<View style={styles.top}>
				<View>
					<Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
				</View>
				<View style={styles.title}>
					<Text fontSize='heading' color='primary' fontWeight='bold'>
						{item.fullName}
					</Text>
					<Text color='textSecondary' fontSize='subheading'>
						{item.description}
					</Text>
					<Text style={styles.language}>{item.language}</Text>
				</View>
			</View>
			<View style={styles.bottom}>
				<View style={styles.statsSection}>
					<Text fontWeight='bold'> {kFormatter(item.stargazersCount)}</Text>
					<Text color='textSecondary'>Stars</Text>
				</View>
				<View style={styles.statsSection}>
					<Text fontWeight='bold'> {kFormatter(item.forksCount)}</Text>
					<Text color='textSecondary'>Forks</Text>
				</View>
				<View style={styles.statsSection}>
					<Text fontWeight='bold'>{kFormatter(item.reviewCount)}</Text>
					<Text color='textSecondary'>Reviews</Text>
				</View>
				<View style={styles.statsSection}>
					<Text fontWeight='bold'>{kFormatter(item.ratingAverage)}</Text>
					<Text color='textSecondary'>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
