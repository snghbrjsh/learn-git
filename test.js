function helpers_voc_get_response(vocResponses, uid, question, answer, value, section, sectionId) {
           for (var i = 0; i < vocResponses.length; i++) {
               for (var qid in vocResponses[i]) {
                   if (qid == question.get('id')) {
                       delete vocResponses[i][qid];
                   }
               }
           }

           var obj = {};
           obj[question.get('id')] = {
               uniqueQuestionId: question.get('uniqueQuestionId'),
               freeFormText: question.get('isFreeForm') || question.get('type').equalsIgnoreCase('checkbox') ? value : null,
               sectionId: sectionId
           };

           if (answer && _.has(answer, 'models')) {
               if (answer.length) {
                   obj[question.get('id')].questionAnswerMappingIds = answer.pluck('questionAnswerMappingId');
               }
               else {
                   obj[question.get('id')].questionAnswerMappingIds = [];
               }
           }
           else if (answer && answer.hasValue('questionAnswerMappingId')) {
               obj[question.get('id')].questionAnswerMappingId = answer.get('questionAnswerMappingId');
           }

           vocResponses.push(obj);
           return vocResponses;
       },