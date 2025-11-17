import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/utils/logger"
import { requireAdminAuth } from "@/lib/admin-auth"
import { 
  generateRecoveryCodes, 
  storeRecoveryCodes, 
  getRemainingRecoveryCodesCount,
  hasRecoveryCodes 
} from "@/lib/recovery-codes"

export const dynamic = 'force-dynamic'

/**
 * Generate new recovery codes
 * POST /api/admin/recovery-codes
 */
export async function POST(request: NextRequest) {
  try {
    // Require admin authentication
    const authResult = await requireAdminAuth(request, 'generate_recovery_codes')
    if (!authResult.authenticated) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Generate new recovery codes
    const { plain, hashed } = generateRecoveryCodes()
    
    // Store hashed codes in database
    await storeRecoveryCodes(hashed)
    
    logger.info("Admin recovery codes generated", { 
      count: plain.length,
      admin: 'admin' 
    })
    
    // Return plain codes (show only once!)
    return NextResponse.json({
      success: true,
      codes: plain,
      count: plain.length,
      message: "Save these codes securely. They will only be shown once!",
    })
  } catch (error) {
    logger.error("Recovery codes generation error", error)
    return NextResponse.json(
      { success: false, error: "Failed to generate recovery codes" },
      { status: 500 }
    )
  }
}

/**
 * Get recovery codes status
 * GET /api/admin/recovery-codes
 */
export async function GET(request: NextRequest) {
  try {
    // Require admin authentication
    const authResult = await requireAdminAuth(request, 'view_recovery_codes_status')
    if (!authResult.authenticated) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get remaining codes count
    const remainingCount = await getRemainingRecoveryCodesCount()
    const hasSetup = await hasRecoveryCodes()
    
    return NextResponse.json({
      success: true,
      remainingCount,
      hasSetup,
      lowCodes: remainingCount < 3,
      recommendation: remainingCount < 3 
        ? "Generate new recovery codes soon" 
        : "Recovery codes are healthy",
    })
  } catch (error) {
    logger.error("Recovery codes status error", error)
    return NextResponse.json(
      { success: false, error: "Failed to get recovery codes status" },
      { status: 500 }
    )
  }
}









