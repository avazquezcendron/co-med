//total add cart items
export const getCartTotal = cartItems => {
    var total = 0;
    var items = 0;
    for(var i=0; i<cartItems.length; i++){
        items = cartItems[i].qty * cartItems[i].price 
        total = total + items;
    }
    return total;
}

// Get Unique Brands from Json Data
export const getBrands = (products) => {
    var uniqueBrands = [];
    // eslint-disable-next-line
    products.map((product, index) => {
        if (product.tags) {
            // eslint-disable-next-line
            product.tags.map((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getColors = (products) => {
    var uniqueColors = [];
    // eslint-disable-next-line
    products.map((product, index) => {
        if(product.colors) {
            // eslint-disable-next-line
            product.colors.map((color) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    return uniqueColors;
}

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products) => {
    
    let min = 100, max = 1000;
    // eslint-disable-next-line
    products.forEach((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}


export const getVisibleproducts = (data, { brand, color, value, sortBy ,searchBy}) => {
    return data.filter(product => {
        
        let brandMatch;
        if(product.tags)
            brandMatch = product.tags.some(tag => brand.includes(tag))
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.colors) {
            colorMatch = product.colors.includes(color)
        }else{
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        const searchByName = (product.name.toLowerCase().indexOf(searchBy) > -1)

        return brandMatch && colorMatch && startPriceMatch && endPriceMatch && searchByName;
    
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
    
}

