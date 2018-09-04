import { QuestionRoutingModule } from './question-routing.module';

describe('QuestionRoutingModule', () => {
  let questionRoutingModule: QuestionRoutingModule;

  beforeEach(() => {
    questionRoutingModule = new QuestionRoutingModule();
  });

  it('should create an instance', () => {
    expect(questionRoutingModule).toBeTruthy();
  });
});
