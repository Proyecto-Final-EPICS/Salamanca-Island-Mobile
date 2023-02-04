export let theme = {
    colors: {
        primary: '#fff',
        secondary: '#000',
        white: '#fff',
        black: '#000',
    },
    borderRadius: {
        small: 4,
        medium: 8,
        large: 16,
        full: 9999,
    },
    shadow: {
        shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
    },
    fontSize: {
        small: 14,
        medium: 16,
        large: 18,
        xl: 20,
        xxl: 24,
        xxxl: 28,
        xxxxl: 32,
        xxxxxl: 36,
        xxxxxxl: 40,
    },
    fontFamily: {
        primary: 'Poppins-Regular',
    },
    fontWeight: {
        regular: 'Poppins-Regular',
        medium: 'Poppins-Medium',
        bold: 'Poppins-Bold',
    },
};

export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        white: string;
        black: string;
    };
    borderRadius: {
        small: number;
        medium: number;
        large: number;
        full: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    fontSize: {
        small: number;
        medium: number;
        large: number;
        xl: number;
        xxl: number;
        xxxl: number;
        xxxxl: number;
        xxxxxl: number;
        xxxxxxl: number;
    };
    fontFamily: {
        primary: string;
    };
    fontWeight: {
        regular: string;
        medium: string;
        bold: string;
    };
}
