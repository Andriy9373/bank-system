<template>
    <app-page back title="Help">
        <question-item 
            v-for="item in questions"
            :key="item.title"
            :question="item"
        />
    </app-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppPage from '@/components/UI/AppPage.vue';
import QuestionItem from '@/components/question/QuestionItem.vue';
  
export default defineComponent({
    name: 'help-view',
    components: { AppPage, QuestionItem },
    setup() {
        const questions = [
            {
                title: 'How does the bank system safeguard customer data against potential breaches?',
                text: 'The bank system employs a multi-layered security approach. This includes end-to-end encryption for all online transactions, regular system audits, and the use of multi-factor authentication for user accounts. Additionally, our infrastructure is designed with intrusion detection systems and real-time monitoring to instantly identify and counteract any suspicious activities.'
            },
            {
                title: 'Can customers access their account information and perform transactions via mobile devices?',
                text: 'Yes, our bank system offers a dedicated mobile application that allows customers to view their account balance, transaction history, transfer funds, and utilize various other features. The mobile application is designed with the same rigorous security standards as our online banking portal and provides a seamless user experience on various devices.'
            },
            {
                title: 'In the event of system downtimes or maintenance, how does the bank ensure minimal disruption to customer services?',
                text: 'We understand the importance of uninterrupted banking services. To address this, our bank system has redundancy built in, with backup servers and data centers. In the event of maintenance or unexpected downtimes, we schedule these during off-peak hours and provide advance notice to our customers. Our goal is to ensure minimal disruption while maintaining the highest standards of service.'
            },
        ]
        return { questions };
    }
});
</script>