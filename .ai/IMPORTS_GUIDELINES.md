# Import Organization Guidelines

To ensure code readability, maintainability, and consistency across all projects, **always organize imports in every file according to the following structure and rules**. This guideline is inspired by the import structure in `src/views/fleet-partner/list.tsx`.

## Import Grouping Order

1. **React and Core Library Imports**
   - All React-related imports (e.g., `react`, `useState`, `useEffect`, etc.)
   - Other core libraries (e.g., `prop-types`, `classnames`)

2. **Next.js and Internationalization Imports**
   - Next.js modules (e.g., `next/link`, `next/router`, `next/head`)
   - Internationalization libraries (e.g., `next-intl`)

3. **UI Library Imports**
   - Imports from UI libraries (e.g., `@mui/material`, `@chakra-ui/react`, `antd`)
   - Style-related imports (e.g., `styled-components`, `@mui/styles`)
   - **For MUI:**
     - Always import each component separately, e.g.,
       ```js
       import Button from '@mui/material/Button'
       import Card from '@mui/material/Card'
       import Typography from '@mui/material/Typography'
       ```
     - **Do NOT use destructured imports like:**
       ```js
       // ❌ Avoid this:
       import { Chip, FormControlLabel, Switch } from '@mui/material'
       ```
     - **Instead, use:**
       ```js
       // ✅ Do this:
       import Chip from '@mui/material/Chip'
       import FormControlLabel from '@mui/material/FormControlLabel'
       import Switch from '@mui/material/Switch'
       ```

4. **Custom Component Imports**
   - Project-specific reusable components (e.g., `@components/`, `@core/components/`)

5. **Application Service, Constants, and Type Imports**
   - Services, API calls, constants, types, hooks, and context (e.g., `@/services/`, `@/constants/`, `@/hooks/`, `@/context/`)

6. **Third-Party Library Imports**
   - All other third-party libraries not covered above (e.g., `lodash`, `date-fns`, `react-hot-toast`)

7. **Application Utility Functions**
   - Utility functions and helpers (e.g., `@/utils/`)

8. **Style Imports**
   - CSS, SCSS, or other style files (if not handled by UI libraries)

---

## Additional Rules

- **Separate each group with a single blank line.**
- **Within each group, sort imports alphabetically by module name.**
- **Use absolute imports (with aliases) over relative imports whenever possible.**
- **Avoid duplicate imports from the same module.**
- **Type-only imports (e.g., `import type { ... }`) should be grouped with their respective module.**
- **Comment each group with a clear label (optional but recommended for large files).**

---

## Example

```tsx
// ** React State and Effect Imports
import React, { useCallback, useEffect, useMemo, useState } from 'react'

// ** Next.js and Internationalization Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

// ** MUI Component Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

// ** Custom Component Imports
import { CustomIconButton } from '@components/custom/custom-icon-button'
import DataTable from '@components/custom/data-table'
import { ShowAvatarImage } from '@components/custom/show-avatar-image'
import OptionMenu from '@core/components/option-menu'

// ** Application Service, Constants, and Type Imports
import { routes } from '@/constants/routes'
import { useDialog } from '@/context/dialog-context'
import { useAbility } from '@/hooks/use-ability'
import { deleteFleetPartner, fetchFleetPartnersList, updateFleetPartnerStatus } from '@services/modules/fleet-partner'
import { FleetPartnerUser } from '@services/modules/fleet-partner/types'

// ** Third-Party Library Imports
import { useQuery } from '@tanstack/react-query'
import type { ColumnDef, SortingState } from '@tanstack/react-table'
import { createColumnHelper } from '@tanstack/react-table'
import _, { capitalize } from 'lodash'
import toast from 'react-hot-toast'

// ** Application Utility Functions
import { useAuth } from '@/context/auth.context'
import { apiToast } from '@/utils'
```

---

## Enforce This Guideline

- Place this file (`IMPORTS_GUIDELINES.md`) in the root of every project.
- Review all PRs for import order and grouping.
- Use code linters or formatters (e.g., ESLint, Prettier) with custom rules if possible.

---

**Consistent import organization leads to a more professional, readable, and maintainable codebase.**
