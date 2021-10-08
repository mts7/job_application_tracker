<?php

use Database\Custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateResumesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(): void
	{
		$schema = DB::connection()->getSchemaBuilder();
		$schema->blueprintResolver(function ($table, $callback) {
			return new Blueprint($table, $callback);
		});
		$schema->create('resumes', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->string('title');
			$table->positiveInteger('version');
			$table->string('location')->comment('The state or locality of the resume');
			$table->string('phone', 24);
			$table->string('email', 320);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down(): void
	{
		Schema::dropIfExists('resumes');
	}
}
