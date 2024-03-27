import { Request, Response } from "express";
import { Route } from "tsoa";

import { CreatedResponseDto } from "../models/dto/common/created-response-dto";
import { ErrorResponseDto } from "../models/dto/common/error-response-dto";
import { GetAllForDropdownOutputDto } from "../models/dto/get-all-for-dropdown-output-dto";
import { CategoryEnum } from "../models/enum/category-enum";
import { CannedResponse } from "../models/dto/canned-response/canned-response-query-result";
import { HygraphService } from '../services/hygraph-service'
import { gql } from "graphql-request";

//const hy = new HygraphService();

@Route("canned-responses")
class CannedResponseController {

	private hy: any; // Declare the type of the client property

    constructor() {
		console.log('ctor called');
        this.hy = new HygraphService();
    }

	//@Post("/add")
	async add(req: Request, res: Response<CreatedResponseDto<CannedResponse> | ErrorResponseDto>) {

		try {
			// const record = await CannedResponse.create({ ...req.body });
			const record = {} as CreatedResponseDto<CannedResponse>;
			return res.json({ msg: "Record added" });
		} catch (e) {
			return res.sendStatus(500).json({ msg: "Failed to add record" });
		}
	}

	//@Get()
	async getAll(req: Request, res: Response<CannedResponse[] | ErrorResponseDto>) {
		const { category } = req.query;
		// console.info(req.query)
		var where = `{}`;
		if(category){
			console.log(`Category ${category}`);
			where = `{category: ${category}}`
		}
		try {
			// const records = await CannedResponse.findAll({ order:[['name','ASC']]});
			const records = await new HygraphService().fetchData(gql`
				{
					cannedResponses(
					  where: ${where}
					  orderBy: title_ASC
					) {
					  id
					  title
					  category
					  tags
					  templateContent {
						html
						markdown
					  }
					  attachments {
						fileName
						mimeType
						size
						url
						handle
						id
					  }
					}
				  }`);

			console.info(records)

			return res.json(records?.cannedResponses || []);
		} catch (e) {
			console.error(e);
			return res.status(500).json({ msg: "Failed to fetch Canned Responses" });
		}
	}

	//@Delete("/")
	async delete(req: Request, res: Response<null | ErrorResponseDto>) {
		try {
			const { id } = req.params;
			// const record = await CannedResponse.findOne({ where: { id } });

			// if (!record) {
			// 	return res.status(404).json({ msg: "Cannot find canned-responses" });
			// }

			// await record.destroy();
			return res.status(204).end();
		} catch (e) {
			return res
				.status(500)
				.json({
					msg: "Failed to delete"
				});
		}
	}

	//@Get()
	async getCategoriesForDropdown(req: Request, res: Response<GetAllForDropdownOutputDto<CategoryEnum>[] | ErrorResponseDto>) {
		try {
			const items: GetAllForDropdownOutputDto<CategoryEnum>[] = [
				{ id: CategoryEnum.DriversLicenseRenewal, name: 'Driver License Renewal' },
				{ id: CategoryEnum.HealthCardRenewal, name: 'Health Card Renewal' },
				{ id: CategoryEnum.OutdoorCardAssistance, name: 'OSAP: Ontario Student Assistance Program' },
				{ id: CategoryEnum.OSAPAssistance, name: 'Outdoor Card Renewal' },
			];
			return res.json(items);
		} catch (e) {
			console.info(e)
			return res.status(500).json({ msg: "Failed to fetch categories" });
		}
	}
}

export default new CannedResponseController();