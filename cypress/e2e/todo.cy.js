// describe, it 구문은 Vitest/Jest와 매우 유사합니다.
describe('Todo 애플리케이션 E2E 테스트', () => {
  it('사용자가 할 일을 성공적으로 추가하고 화면에서 확인할 수 있다', () => {
    /** 1. [Arrange] 테스트할 페이지를 방문합니다. **/
    //    (Cypress가 테스트 서버를 띄워줍니다. 'baseUrl'은 cypress.config.js에서 설정)
    cy.visit('/test/integration/TodoApp');

    /** 2. [Act] 사용자가 입력하고 버튼을 클릭하는 행동을 시뮬레이션합니다. **/
    
    // placeholder 텍스트로 입력창을 찾아 'Cypress로 E2E 테스트하기'를 타이핑합니다.
    cy.get('[placeholder="할 일을 입력하세요"]').type('Cypress로 E2E 테스트하기');

    // '추가'라는 텍스트를 가진 버튼을 찾아 클릭합니다.
    cy.contains('추가').click();

    // 3. [Assert] 행동의 결과를 검증합니다.
    
    // 화면에 'Cypress로 E2E 테스트하기'라는 텍스트를 가진 요소가
    // 눈에 보이는 상태('be.visible')로 존재하는지 확인합니다.
    cy.contains('Cypress로 E2E 테스트하기').should('be.visible');

    // 입력창이 비워졌는지도 확인합니다.
    cy.get('[placeholder="할 일을 입력하세요"]').should('have.value', '');
  });
});