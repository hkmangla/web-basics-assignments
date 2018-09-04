import { AnswerRoutingModule } from './answer-routing.module';

describe('AnswerRoutingModule', () => {
  let answerRoutingModule: AnswerRoutingModule;

  beforeEach(() => {
    answerRoutingModule = new AnswerRoutingModule();
  });

  it('should create an instance', () => {
    expect(answerRoutingModule).toBeTruthy();
  });
});
