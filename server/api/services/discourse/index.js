import Conversation from '../conversation';
import handleDiscourse from './discourse.handler';

class DiscourseService {
  message({
    input,
    context
  }) {
    return Conversation
      .message({input, context})
      .map(handleDiscourse);
  }
}
export default new DiscourseService();
