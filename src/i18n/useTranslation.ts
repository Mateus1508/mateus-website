import { usePreferences } from '../context/PreferencesContext'
import { getMessages, type Messages } from './messages'

export function useTranslation() {
  const { locale } = usePreferences()
  const m: Messages = getMessages(locale)
  return { locale, m }
}
