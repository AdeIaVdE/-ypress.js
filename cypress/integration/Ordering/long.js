describe('Тестируем сайт QA Studio  ', function () {
    it('Позитивный тест на логин и пароль', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('[href="https://testqastudio.me"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
        cy.get('.cart-panel-content > .modal-header > .modal-title').contains('Ваша Корзина (4)');
        cy.get('.mini-cart-item-11342 > .woocommerce-mini-cart-item__summary > .woocommerce-mini-cart-item__name > .woocommerce-mini-cart-item__title').contains('БРОММС Двухместная кровать');
        cy.get('.mini-cart-item-11342 > .woocommerce-mini-cart-item__summary > .woocommerce-mini-cart-item__name > .woocommerce-mini-cart-item__price > .woocommerce-Price-amount > bdi').contains('13,900.00 ₽');
        cy.get('.mini-cart-item-11337 > .woocommerce-mini-cart-item__summary > .woocommerce-mini-cart-item__name > .woocommerce-mini-cart-item__title').contains('КЛЛАРИОН Низкий столик');
        cy.get('.mini-cart-item-11337 > .woocommerce-mini-cart-item__summary > .woocommerce-mini-cart-item__name > .woocommerce-mini-cart-item__price > .woocommerce-Price-amount > bdi').contains('6,100.00 ₽');
        cy.get('.checkout').click();
        cy.get('.page-header__title').contains('Оформение заказа');
        cy.get('#billing_first_name').type('Serj');
        cy.get('#billing_last_name').type('asdasd');
        cy.get('#billing_company').type('kompaniya');
        cy.get('#select2-billing_country-container').type('Россия');
        cy.get('#billing_address_2').click();
        cy.get('#billing_address_1').type('3,pushkina');
        cy.get('#billing_address_2').type('1,2,3');
        cy.get('#billing_city').type('Moscow');
        cy.get('#billing_state').type('Московская область');
        cy.get('#billing_postcode').type('140000');
        cy.get('#billing_phone').type('+793123123123');
        cy.get('#billing_email').type('ks12@mail.ru');
        cy.get('#place_order').click();
        cy.get('.page-header__title').contains('Оформение заказа');
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
        






    })
})