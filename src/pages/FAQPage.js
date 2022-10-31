import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer";
import classes from "./FAQPage.module.css";
import QuestionCategory from "../components/QuestionCategory";

const FAQPage = () => {
  const zakupyOnlineQuestions = [
    {
      question: "Jak założyć konto w sklepie?",
      text: 'Aby założyć konto w sklepie należy w Menu kliknąć przycisk "zaloguj" po czym wybrać opcję "Stwórz konto". Następnie uzupełnić formularz i kliknąć "Zarejestruj".',
    },
    {
      question: "Co oznaczają statusy zamówień?",
      text: 'Oznaczają one na jakim etapie jest obecnie zamówienie. Jeśli status to "Nadany do wysyłki" to zamówienie jest już skompletowane i czeka na firmę kurjerską, a jeśli status to "Wysłane" oznacza to że paczka została odebrana przez firmę kurjerską i niedługo powinna zostać dostarczona.',
    },
    {
      question: "Czy jest możliwość anulowania zamówienia?",
      text: "Jak najbardziej jest taka możliwość, wystarczy skontaktować się z właścicielem przedmiotu, natomiast jeśli nie chce on się zgodzić na anulowanie to napisać do naszego supportu z prośbą o anulowanie i numerem zamówienia.",
    },
  ];
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <div className={classes.opacity}></div>
          <p>FAQ's</p>
        </div>
        <QuestionCategory
          shown={true}
          title="Zakupy Online"
          questions={zakupyOnlineQuestions}
        />
        <QuestionCategory
          shown={false}
          title="Płatności"
          questions={zakupyOnlineQuestions}
        />
        <QuestionCategory
          shown={false}
          title="Wysyłka"
          questions={zakupyOnlineQuestions}
        />
        <QuestionCategory
          shown={false}
          title="Zwroty i reklamacje"
          questions={zakupyOnlineQuestions}
        />
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
