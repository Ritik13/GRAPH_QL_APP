import { gql } from "@apollo/client";

export const POKIMON_QUERY = gql`
    query GET_POKIMONS_IDS {
        pokemon_v2_ability {
            id
        }
    }
`


export const WITH_VAR_POKI_QUERY = gql`
  query GET_ABILITY_WITH_VAR($any: Int!) {
    pokemon_v2_abilityeffecttext_by_pk(id: $any) {
      effect
    }
  }
`;
