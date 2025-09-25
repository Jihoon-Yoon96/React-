// describe('상품 페이지 E2E 테스트', () => {
//   it('상품 목록에서 특정 상품을 클릭하면 해당 상세 페이지로 이동한다', () => {
//     // 1. [Arrange] 네트워크 요청을 미리 설정하고 페이지를 방문합니다.
    
//     // '/api/products' API가 호출될 때 가짜(Mock) 응답을 반환하도록 설정합니다.
//     // E2E 테스트의 안정성을 위해 실제 DB 대신 가짜 데이터를 사용합니다.
//     cy.intercept('GET', '/api/products', {
//       fixture: 'products.json' // cypress/fixtures/products.json 파일의 데이터를 사용
//     }).as('getProducts'); // 이 요청에 'getProducts'라는 별명을 붙입니다.

//     // '/api/products/1' API에 대한 가짜 응답도 설정합니다.
//     cy.intercept('GET', '/api/products/1', {
//       fixture: 'product-detail.json'
//     }).as('getProductDetail');

//     // 상품 목록 페이지로 이동합니다.
//     cy.visit('/products');

//     // '/api/products' 요청이 완료될 때까지 기다립니다.
//     cy.wait('@getProducts');

//     // 2. [Act] 목록에서 '초콜릿' 상품을 찾아 클릭합니다.
//     cy.contains('맛있는 초콜릿').click();

//     // 3. [Assert] 상세 페이지로 이동했는지, 데이터가 올바른지 검증합니다.

//     // '/api/products/1' 요청이 완료될 때까지 기다립니다.
//     cy.wait('@getProductDetail');

//     // (검증 1) URL이 상세 페이지 경로를 포함하는지 확인합니다.
//     cy.url().should('include', '/products/1');

//     // (검증 2) 상세 페이지에 상품 이름과 가격이 올바르게 표시되는지 확인합니다.
//     cy.contains('h1', '맛있는 초콜릿').should('be.visible');
//     cy.contains('가격: 2,000원').should('be.visible');
//   });
// });