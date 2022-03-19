import { SCOPE } from '../key'

export const KEYS = {
  scope: SCOPE,
  cartCount: () => `${KEYS.scope}/cartCount`,
}
