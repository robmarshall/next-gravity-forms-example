import { getGravityForm } from "next-gravity-forms/server";
import FormPicker from "./FormPicker";
import styles from "../page.module.css";

export default async function Dynamic() {
  // Specific forms that the user can pick from.
  // These forms would need to exist in your WordPress site.
  // Change these to the form IDs you want to use.
  // Another way of doing this would be to run a query to get all forms.
  const formsToPickFrom = [1, 3, 4, 8];
  const allForms = {};

  for (const formId of formsToPickFrom) {
    const form = await getGravityForm(formId);
    // Add to object with form ID as key.
    allForms[formId] = form;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <FormPicker formData={allForms} formIds={formsToPickFrom} />
      </div>
    </main>
  );
}
