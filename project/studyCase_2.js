// Fake API içerisinde renk gibi veriler bulunmadığı için sadece kategori ve artan/azalan fiyat filtreleri koydum.

((self) => {
    'use strict';

    const config = {
        activeFiltersText: 'Aktif Filtreler',
        categoryFilterText: 'Kategori',
        sortingFilterText: 'Sırala',
        increasingPriceText: 'Artan Fiyat',
        decreasingPriceText: 'Azalan Fiyat',
        mostPopularText: 'En Popüler Ürünler',
        fakeProductUrl: 'https://dummyjson.com/products',
        removeFilterTagText: 'Filtreyi Kaldır',
    };

    const classes = {
        style: 'custom-style',
        wrapper: 'general-wrapper',
        container: 'general-container',
        titleSection: 'title-section',
        titleSectionText: 'title-section-text',
        productCount: 'product-count',
        mainContent: 'main-content',
        leftSide: 'left-side',
        activeFiltersSection: 'active-filters-section',
        filterSection: 'filter-section',
        categoryFilterSection: 'category-filter-section',
        categoryFilterSelector: 'category-filter-selector',
        sortingFilterSection: 'sorting-filter-section',
        sortingFilterSelector: 'sorting-filter-selector',
        rightSide: 'right-side',
        leftSideFilters: 'left-side-filters',
        rightSideProducts: 'right-side-products',
        mainProductImage: 'main-product-image',
        mainProductName: 'main-product-name',
        mainProductPrice: 'main-product-price',
        productsWrapper: 'products-wrapper',
        categoryFilterTag: 'category-filter-tag',
        filterTagSection: 'filter-tag-section',
        removeFilterTag: 'remove-filter-tag',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${ classes[key] }`, createdSelector
    ), {
        header: 'header',
        checkBoxBefore: 'input[type=checkbox]+label:before',
    });

    self.init = () => {
        const { fakeProductUrl } = config;

        self.reset();
        self.buildCss();
        self.buildHTML();
        self.fetchProducts(fakeProductUrl);
    };

    self.reset = () => {
        const { style, wrapper } = selectors;

        [wrapper, style].forEach((selector) => document.querySelector(selector)?.remove());
    };

    self.buildCss = () => {
        const { wrapper, container, titleSection, titleSectionText, productCount, mainContent, leftSide,
            rightSide, productsWrapper, rightSideProducts, mainProductImage, mainProductName, mainProductPrice,
            activeFiltersSection, filterSection, stockFilterSection, categoryFilterTag,
            checkBoxBefore, filterTagSection, removeFilterTag } = selectors;
        
        const customStyle =
        `${ wrapper } {
            background: #fff;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 2.5rem 1rem;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            position: relative;
        }
        ${ container } {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        ${ titleSection } {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 10px .9rem;
            margin-bottom: 50px;
            border-bottom: 3px solid black;
        }
        ${ titleSectionText } {
            font-size: 2.125rem;
            line-height: 2.5rem;
            font-weight: 500;
            color: #000;
        }
        ${ productCount } {
            font-weight: 400;
            font-size: .875rem;
            letter-spacing: 0.015625rem;
            line-height: 1.25rem;
            color: #666;
        }
        ${ mainContent } {
            display: flex;
            width: 100%;
        }
        ${ leftSide } {
            flex: 1;
            background: transparent;
            overflow-y: hidden;
            position: sticky;
            top: 85px;
            height: 80vh;
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            max-width: 280px;
            font-family: 'Segoe UI', sans-serif;
        }
        ${ activeFiltersSection } {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            border-bottom: 1px solid #ddd;
            padding-bottom: 0.5rem;
        }
        ${ filterSection } {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        ${ filterSection } > div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        ${ filterSection } label {
            font-size: 0.95rem;
            font-weight: 500;
            color: #444;
            margin-bottom: 0.25rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        ${ filterSection } select {
            padding: 0.6rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            background-color: #fff;
            font-size: 0.95rem;
            transition: border-color 0.2s ease;
        }
        ${ filterSection } select:focus {
            outline: none;
            border-color: #007aff;
        }
        .stock-filter-section div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        ${ stockFilterSection } input[type="checkbox"] {
            accent-color: #007aff;
            width: 16px;
            height: 16px;
        }
        ${ rightSide } {
            flex: 3;
            padding: 0 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            overflow-y: auto;
        }
        ${ productsWrapper } {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            padding: 2rem;
            box-sizing: border-box;
        }
        ${ rightSideProducts } {
            background-color: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
        }
        ${ rightSideProducts }:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        ${ mainProductImage } {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        ${ mainProductName } {
            font-size: 1.1rem;
            font-weight: 600;
            color: #222;
            margin-bottom: 0.5rem;
        }
        ${ mainProductPrice } {
            font-size: 1rem;
            font-weight: 500;
            color: #e60023;
        }
        ${ categoryFilterTag } {
            background: #e1dcdc;
            padding: 10px;
            width: max-content;
            border-radius: 5px;
            font-size: 15px;
            margin: 10px 0px;
            cursor: pointer;
            text-transform: capitalize;
        }
        ${ filterTagSection } {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: max-content;
            gap: 10px;
        }
        ${ removeFilterTag } {
            font-size: 15px;
            text-decoration: underline;
            cursor: pointer;
        }
        ${ checkBoxBefore } {
            position: initial !important;
        }
        @media screen and (max-width: 1100px) {
            ${ productsWrapper } {
                grid-template-columns: repeat(1, 1fr);
            }
            ${ leftSide } {
                top: unset;
                max-width: unset;
            }
            ${ mainContent } {
                flex-direction: column;
            }
        }`;

        const styleTag = document.createElement('style');
        styleTag.className = classes.style;
        styleTag.textContent = customStyle;
        document.head.appendChild(styleTag);
    };

    self.buildHTML = async () => {
        const { wrapper, container, titleSection, titleSectionText, productCount, mainContent, leftSide,
            filterSection, categoryFilterSection, sortingFilterSection, activeFiltersSection, rightSide, productsWrapper,
            categoryFilterSelector, sortingFilterSelector } = classes;
        const { categoryFilterText, sortingFilterText, increasingPriceText, decreasingPriceText, activeFiltersText,
            mostPopularText } = config

        const outerHTML =
        `<div class="${ wrapper }">
            <div class="${  container }">
                <div class="${ titleSection }">
                    <h1 class="${ titleSectionText }">Products</h1>
                    <span class="${ productCount }"></span>
                </div>
                <div class="${ mainContent }">
                    <div class="${ leftSide }">
                        <div class="${ activeFiltersSection }">${ activeFiltersText }</div>
                        <div class="${ filterSection }">
                            <div class="${ sortingFilterSection }">
                                <label>${ sortingFilterText }</label>
                                <select class="${ sortingFilterSelector }">
                                    <option value="popular">${ mostPopularText }</option>
                                    <option value="increasing">${ increasingPriceText }</option>
                                    <option value="decreasing">${ decreasingPriceText }</option>
                                </select>
                            </div>
                            <div class="${ categoryFilterSection }">
                                <label>${ categoryFilterText }</label>
                                <select class="${ categoryFilterSelector }">
                                    <option value="all">Tümü</option>
                                    ${ await self.setCategories() }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="${ rightSide }">
                        <div class="${ productsWrapper }">
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        const $header = document.getElementById('header');

        $header.nextElementSibling?.remove()

        $header.insertAdjacentHTML('afterend', outerHTML);

        self.setEvents();
    };

    self.setCategories = async () => {
        const { fakeProductUrl } = config;

        try {
            const response = await fetch(`${  fakeProductUrl }/categories`);
            const categoryList = await response.json();

            const productHTML = categoryList.map((category) => (
                `<option value="${ category.slug }">${ category.name }</option>`
            ));

            return productHTML.join('');
        } catch (err) {
            console.error('Kategori verisi alınamadı:', err);
        }
    };

    self.setEvents = () => {
        const { categoryFilterSelector, productsWrapper ,sortingFilterSelector,
            categoryFilterTag: categoryFilterTagSelector, removeFilterTag: removeFilterTagSelector } = selectors;
        const { fakeProductUrl } = config

        document.querySelector(categoryFilterSelector)?.addEventListener('change', (event) => {
            const selectorValue = document.querySelector(sortingFilterSelector).value;
            const priceOrder = `?sortBy=price&order=${ selectorValue === 'increasing' ? 'asc' : 'desc' }`;
            const targetValue = event.target.value;

            document.querySelector(categoryFilterTagSelector)?.remove();
            document.querySelector(removeFilterTagSelector)?.remove();

            document.querySelector(productsWrapper).innerHTML = '';

            if (targetValue === 'all') {
                self.fetchProducts(`${ fakeProductUrl }${ selectorValue === 'popular' ? '' : priceOrder }`);
            } else {
                self.fetchProducts(`${ fakeProductUrl }/category/${ targetValue }${ selectorValue === 'popular' ? '' :
                    priceOrder }`);

                self.setFilterTag(targetValue);

                document.querySelector(removeFilterTagSelector)?.addEventListener('click', () => {
                    self.init();
                });
            }
        });

        document.querySelector(sortingFilterSelector)?.addEventListener('change', (event) => {
            const selectorValue = document.querySelector(categoryFilterSelector).value;
            const categoryValue = selectorValue === 'all' ? '' : `/category/${ selectorValue }`;

            document.querySelector(productsWrapper).innerHTML = '';

            if (event.target.value === 'popular') {
                self.fetchProducts(`${ fakeProductUrl }${ categoryValue }`);
            } else {
                self.fetchProducts(`${ fakeProductUrl }${ categoryValue }?sortBy=price&order=${ event.target.
                    value === 'increasing' ? 'asc' : 'desc' }`);
            }
        });
    };

    self.fetchProducts = async (url) => {
        const { rightSideProducts, mainProductImage, mainProductName, mainProductPrice } = classes;
        const { productsWrapper, productCount } = selectors;

        try {
            const response = await fetch(url);
            const products = await response.json();
            const { products: productData } = products;

            const productHTML = productData.map((product) => (
            `<div class="${ rightSideProducts }">
                <img class="${ mainProductImage }" src="${ product.images[0] }" alt="${ product.title }" />
                <h3 class="${ mainProductName }" >${ product.title }</h3>
                <span class="${ mainProductPrice }">${ product.price } TL</span>
            </div>`
            )).join('');

            document.querySelector(productsWrapper)?.insertAdjacentHTML('afterBegin', productHTML);

            document.querySelector(productCount).innerHTML = `${ productData.length } ürün`;
        } catch (err) {
            console.error('Ürünler çekilirken hata:', err.message);
        }
    };

    self.setFilterTag = (value) => {
        const { categoryFilterTag, removeFilterTag, filterTagSection } = classes;
        const { activeFiltersSection } = selectors;
        const { removeFilterTagText } = config;

        const filterTag = 
        `<div class="${ filterTagSection }">
            <div class="${ categoryFilterTag }">
                ${ value }
            </div>
            <span class="${ removeFilterTag }">${ removeFilterTagText }</span>
        </div>`;

        document.querySelector(activeFiltersSection).insertAdjacentHTML('beforeend', filterTag);
    };

    return self.init();
})({});